module.exports = function(sequelize, DataTypes) {
    
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
        {
 
        freezeTableName: true
    });

    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            through: "UserId",
            foreignKey: {
                allowNull: false
            }
        });
        Post.hasMany(models.Response, {
            onDelete: "cascade"
        });
    };
    return Post;
};
