'use strict';
require('dotenv').config({silent: true});
const pm2 = require('pm2');
const MACHINE_NAME = 'hk1';
const PUBLIC_KEY = process.env.KEYMETRICS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.KEYMETRICS_PRIVATE_KEY;
const instances = process.env.WEB_CONCURRENCY || -1;
const maxMemory = process.env.WEB_MEMORY || 512;


pm2.connect(() => {
    pm2.start({
        script: './index.js',
        name: 'Wwwonderful-App-Prod',
        exec_mode: 'cluster',
        instances: instances,
        max_memory_restart: maxMemory + 'M',
        env: {
            'NODE_ENV': 'production'
        },
        post_update: ['yarn install']
    }, () => {
        pm2.interact(PRIVATE_KEY, PUBLIC_KEY, MACHINE_NAME, () => {
            pm2.launchBus((err, bus) => {
                console.log('[PM2] Log streaming started');

                bus.on('log:out', (packet) => {
                    console.log('[App:%s] %s', packet.process.name, packet.data);
                });

                bus.on('log:err', (packet) => {
                    console.error('[App:%s][Err] %s', packet.process.name, packet.data);
                });
            });
        });
    });
});
