const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyContoller');

router.route('/content')
.get(companyController.getRemoteContent)


router.route('/')
  .get(companyController.getAllCompanies)
  .post(companyController.createCompany)

  router.route('/:id')
  .get(companyController.getCompany)
  .patch(companyController.updateCompany)
  .delete(companyController.deleteCompany)





  module.exports = router;