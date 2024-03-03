const { configDotenv } = require("dotenv");
const Company = require("../models/companyModel");
const axios = require("axios");
configDotenv();

exports.getAllCompanies = async (req, res) => {
  if (req.hostname !== "localhost") {
    return res.status(403).json({
      status: "fail",
      message: "You are not allowed to access this route",
    });
  }

  try {
    const companies = await Company.find();
    res.status(200).json({
      status: "success",
      results: companies.length,
      data: {
        companies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        company: newCompany,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCompany = async (req, res) => {
  //    get the company with the given id
  try {
    const company = await Company.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        company,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCompany = async (req, res) => {
  //   update the company with the given id
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        company,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteCompany = async (req, res) => {
  //   delete the company with the given id
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// function vulnerable to SSRF
exports.getRemoteContent = async (req, res) => {
  console.log("req.query.url", req.query.url);
  try {
    const url = req.query.url;

    // check if the url is localhost
    if (url.includes("localhost")) {
      throw new Error("Localhost is not allowed");
    }

    const content = await axios.get(url);
    res.status(200).json({
      status: "success",
      data: {
        content: content.data,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
