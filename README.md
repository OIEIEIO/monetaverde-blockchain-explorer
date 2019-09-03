# MonetaVerde-Blockchain-Explorer
Block explorer for MonetaVerde CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon MonetaVerde. It should be accessible from the Internet. Run monetaverded with open port as follows:
```bash
./monetaverded --restricted-rpc --rpc-bind-ip=0.0.0.0 --rpc-bind-port=32348
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
