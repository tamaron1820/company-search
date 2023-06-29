class ChangeRoleToUsers < ActiveRecord::Migration[7.0]
  def up
    change_column_default :users, :role, 'user'
  end

  def down
    change_column_default :users, :role, nil
  end
end
