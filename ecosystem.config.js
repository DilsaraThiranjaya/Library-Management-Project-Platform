module.exports = {
  apps: [
    {
      name: "config-server",
      script: "/home/g_a_dilsara_thiranjaya/Library-Management-Project-Platform/config-server/target/Config-Server-1.0.0.jar",
      interpreter: "java",
      args: "-jar"
    },
    {
      name: "service-registry",
      script: "/home/g_a_dilsara_thiranjaya/Library-Management-Project-Platform/service-registry/target/Service-Registry-1.0.0.jar",
      interpreter: "java",
      args: "-jar"
    },
    {
      name: "api-gateway",
      script: "/home/g_a_dilsara_thiranjaya/Library-Management-Project-Platform/api-gateway/target/Api-Gateway-1.0.0.jar",
      interpreter: "java",
      args: "-jar"
    }
  ]
}