package main

import (
	"github.com/gin-gonic/gin"
	"github.com/sashenhasindu/go-curd/controllers"
	"github.com/sashenhasindu/go-curd/initializers"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()

}

func main() {

	r := gin.Default()

	r.GET("/", controllers.PostHome)
	r.POST("/posts", controllers.PostsCreate)
	r.PUT("/posts/:id", controllers.PostUpdate)

	r.GET("/posts", controllers.PostIndex)
	r.GET("/posts/:id", controllers.PostShow)
	/* r.DELETE("/posts/:id", controllers.PostDelete) */

	r.Run()
}
