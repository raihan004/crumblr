class Comment < ActiveRecord::Base
  belongs_to :task
  # validates :name, :email, :body, presence: true
end
