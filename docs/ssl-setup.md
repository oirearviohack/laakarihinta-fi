# Create a certificate
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365

# Override key with new key
openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
