module.exports = {
  apps : [
    {
      name: 'config-server',
      script: 'java',
      args: '-jar Library-Management-Project-Platform-Config-Server/target/Config-Server-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        SERVER_PORT: '8888'
      }
    },
    {
      name: 'service-registry',
      script: 'java',
      args: '-jar Library-Management-Project-Platform-Service-Registry/target/Service-Registry-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    },
    {
      name: 'api-gateway',
      script: 'java',
      args: '-jar Library-Management-Project-Platform-Api-Gateway/target/Api-Gateway-1.0.0.jar',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G'
    }
  ]
};
