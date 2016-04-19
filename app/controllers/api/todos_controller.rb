class Api::TodosController < ApplicationController

def index
  render json: Todo.all
end

def show
  @todo = Todo.find(params[:id])

  render json: @todo
end

def create
  @todo = Todo.create!(todo_params)

  render json: @todo
end

def destroy
  @todo = Todo.find(params[:id])
  @todo.destroy!

  render json: @todo
end

def update
  @todo = Todo.find(params[:id])
  @todo.update!(todo_params)

  render json: @todo
end

private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end

# curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d ' {"todo":{"title":"firstname","body":"lastname","done":"true"}}'  http://localhost:3000/api/todos/
