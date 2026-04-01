const { Op } = require("sequelize")
const {
    sequelize,
    User,
    UserProfile,
    Course,
    Material,
    CourseUser,
    MaterialUser
} = require("../models/index")
const formatCurrency = require("../helpers/helper")
const bcrypt = require("bcryptjs");

class Controller {
    static async loginForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async login(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async logout(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async users(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async userRegisterForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async userRegister(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async editUsersForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async editUsers(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async deleteUsers(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async home(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async addCoursesForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async addCourses(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async editCoursesForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async editCourses(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async courseMaterials(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async learnCourse(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async addMaterialsForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async addMaterials(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async editMaterialsForm(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async editMaterials(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async deleteMaterials(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async finishMaterials(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async undoMaterials(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller
