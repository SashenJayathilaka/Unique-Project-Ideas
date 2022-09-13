package main

import (
	"github.com/sashenhasindu/go-curd/initializers"
	"github.com/sashenhasindu/go-curd/models"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(&models.Post{})
}
