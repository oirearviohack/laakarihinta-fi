# For Windows
http://nginx.org/en/docs/windows.html
Kill nginx: taskkill /f /IM nginx.exe

# For OSX
http://nginx.org/en/docs/install.html

# Enable SSL
Move your certs into Nginx conf folder
Run nginx -t to test if your configuration is ok.

# Good guides
- https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
- https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
- https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-with-http-2-support-on-ubuntu-16-04

# Setup custom url
- Windows: C:\windows\System32\drivers\etc (setup your custom DNS, remember to clear out)

# Example config 
```
events {
	worker_connections 1024;
}

http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    gzip on;

	add_header X-XSS-Protection         "1; mode=block";
	add_header X-Frame-Options          "deny";
	add_header X-Content-Type-Options   "nosniff";
	
	upstream wwwonderful {
		server 127.0.0.1:8080;
		keepalive 64;
	}
	
	server {
		listen 80;
		listen [::]:80;
		server_name    wwwonderful.com;
		return 301 https://$server_name$request_uri;
	}

	server {
		listen						443 ssl http2 default_server;
		listen                    	[::]:443 ssl http2 default_server;
		server_name               	wwwonderful;

		ssl                         	on;
		ssl_ciphers                 	HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
		ssl_protocols               	TLSv1 TLSv1.1 TLSv1.2;
		ssl_session_cache           	builtin:1000  shared:SSL:10m;
		ssl_certificate      		  	cert.pem;
		ssl_certificate_key  	      	key.pem;
		ssl_dhparam                 	dhparam.pem;
		ssl_prefer_server_ciphers   	on;

		location / {
			proxy_pass              		http://wwwonderful$request_uri;
			proxy_redirect          		off;
			proxy_set_header        		X-Real-IP $remote_addr;
			proxy_set_header        		X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header        		X-Forwarded-Proto $scheme;
			proxy_set_header        		X-Forwarded-Proto-Version $http2;
			proxy_set_header        		Host $http_host;
			proxy_set_header        		X-NginX-Proxy true;
			proxy_set_header        		Connection "";

			expires                 		0;
			add_header             	 		Pragma public;
			add_header              		Cache-Control "public";
			access_log              		on;
		}

		access_log   	logs/access.log;
		error_log     logs/error.log warn;
	}
}
```
