import Ui from "swagger-ui-express"
import swaggereJsdoc from "swagger-jsdoc"

const options = {
  swaggerDefinition: {
    openapi : "3.0.0",
    info: {
      version: "1.0.0",
      title: "Hairlog API",
      description:
        "API test for Hairlog",
    },
    servers: [
      {
        url : "http://localhost:3000"
      },
      {
        url: "https://hairlogapi.herokuapp.com/"
      },
    ], 
    security : [
      {
        ApiKeyAuth: []
      }
    ]
  },
  apis: ["./Swagger/config/*.js"]
}
const specs = swaggereJsdoc(options)

export default { Ui, specs }