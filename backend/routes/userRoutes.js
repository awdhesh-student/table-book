const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  registerController,
  loginController,
  authController,
  addTableController,
  getalltablesController,
  bookTableController,
  getAllBookingsController,
  statusChangeController,
  forgotPasswordController,
  statusRejectChangeController,
  statusApproveChangeController,
  getAllTablesForOrganization,
} = require("../controllers/userController");


const router = express.Router();


router.post("/register", registerController);

router.get("/getalltables", getalltablesController)

router.post("/login", loginController);

router.post("/forgotpassword", forgotPasswordController);

router.post("/getuserdata", authMiddleware, authController);

router.post('/addtable/:userId', authMiddleware, addTableController)

router.post('/booktable/:hotelId', authMiddleware, bookTableController)

router.get('/allbooking', authMiddleware, getAllBookingsController)

router.post('/approve', authMiddleware, statusApproveChangeController)

router.post('/reject', authMiddleware, statusRejectChangeController)

router.get('/getalltables/:userId', authMiddleware, getAllTablesForOrganization)

module.exports = router;
