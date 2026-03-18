module.exports = {
  apps: [
    {
      name: "config-server",
      script: "./config-server/target/Config-Server-1.0.0.jar",
      interpreter: "java",
      args: "-jar",
      log_file: "./logs/config-server.log",
      
    },
    {
      name: "service-registry",
      script: "./service-registry/target/Service-Registry-1.0.0.jar",
      interpreter: "java",
      args: "-jar",
      log_file: "./logs/service-registry.log",
    },
    {
      name: "api-gateway",
      script: "./api-gateway/target/Api-Gateway-1.0.0.jar",
      interpreter: "java",
      args: "-jar",
      log_file: "./logs/api-gateway.log",
    }
  ]
}