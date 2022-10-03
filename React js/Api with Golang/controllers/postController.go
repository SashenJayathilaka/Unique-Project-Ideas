package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/sashenhasindu/go-curd/initializers"
	"github.com/sashenhasindu/go-curd/models"
)

func PostsCreate(c *gin.Context) {

	var body struct {
		Body  string
		Title string
	}

	c.Bind(&body)

	posts := models.Post{Title: body.Title, Body: body.Body}

	result := initializers.DB.Create(&posts)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"message": posts,
	})
}

func PostHome(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Hello world",
	})

}

func PostIndex(c *gin.Context) {
	// Get the Post
	var posts []models.Post
	initializers.DB.Find(&posts)

	c.JSON(200, gin.H{
		"posts": posts,
	})
}

func PostShow(c *gin.Context) {

	// get id off url
	id := c.Param("id")

	// Get the Post
	var post models.Post
	initializers.DB.Find(&post, id)

	c.JSON(200, gin.H{
		"post": post,
	})
}

func PostUpdate(c *gin.Context) {
	// Get the id  off url
	id := c.Param("id")

	// get the data off req body
	var body struct {
		Body  string
		Title string
	}

	c.Bind(&body)

	// find the post were updating
	var post models.Post
	initializers.DB.Find(&post, id)

	// update it
	// Update attributes with `struct`, will only update non-zero fields
	initializers.DB.Model(&post).Updates(models.Post{Title: body.Title, Body: body.Body})

	// Respond with it
	c.JSON(200, gin.H{
		"post": post,
	})
}

/* func PostDelete(c *gin.Context) {

	// get id off url
	id := c.Param("id")

	// Delete the post
	initializers.DB.Delete(&models.Post{}, id)

	//respond
	c.Status(200)
} */
