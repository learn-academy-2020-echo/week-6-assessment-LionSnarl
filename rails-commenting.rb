# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) BlogPostsController is a child class inheriting all features of ApplicationController and allows us to add more specific features
class BlogPostsController < ApplicationController
  def index
    # 2) This is where an Active Record call is created that will have all content from the database as an instance variable.
    @posts = BlogPost.all
  end

  def show
    # 3) This is an Active Record call to "show" a specific blog post by found by id
    @post = BlogPost.find(params[:id])
  end

  # 4) Defining new, in this case its signalling to developers this is where users can add information to the web application
  def new
    @post = Post.new
  end

  def create
    # 5) To create an Active Record call to "create" a new user input for Blog Post with blog_post_params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) an "update" Active Record call 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7)This is if it is not being "destroyed" aka something went wrong... , and reverts back to the specific post 
      redirect_to blog_post_path(@post)
    end
  end

  # 8) ONLY USED IN THIS CLASS To keep only authorized users from accessing the abilities below the word private. It allows there to be no chance the methods below cannot be called somewhere else in the program
  private
  def blog_post_params
    # 9) This is allowing a blog post to be permitted to post if it follows the parameters of a blog post, which are a title and content.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) Defines relationship between blog post and comments. This allows you to view :comments visibly on the webpage. Creates a has_many relationship between BlogPost and ApplicationRecord so each BlogPost can contain comments 
  has_many :comments
end
