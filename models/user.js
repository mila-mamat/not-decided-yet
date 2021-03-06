// Import dependencies
const bcrypt = require("bcryptjs");
const to = require('to-case');

// Create User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Define User attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      set (val) {
        this.setDataValue('first_name', to.title(val));
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      set (val) {
        this.setDataValue('last_name', to.title(val));
      }
    },
    profile_photo: {
      type: DataTypes.STRING,
      defaultValue: '/avatars/profile-placeholder.png',
    },
    birthdate: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      set (val) {
        this.setDataValue('city', to.title(val));
      }
    },
    province_state: {
      type: DataTypes.STRING,
      set (val) {
        this.setDataValue('province_state', to.title(val));
      }
    },
    country: {
      type: DataTypes.STRING,
      set (val) {
        this.setDataValue('country', to.title(val));
      }
    }
  });

  // Add associations
  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: {
        onDelete: 'cascade'
      }
    });
    User.hasMany(models.Comment, {
      foreignKey: {
        onDelete: 'cascade'
      }
    });
    User.hasMany(models.CommentLike, {
      foreignKey: {
        onDelete: 'cascade'
      }
    });
    User.hasMany(models.PostLike, {
      foreignKey: {
        onDelete: 'cascade'
      }
    });
  };

  // Create method to check if unhashed password provided by user can be compared with hashed password in database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  // Create hook to automatically hash password provided by user prior to storing in database
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
