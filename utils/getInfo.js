//ajax获取相关内容
var app = getApp();

function getTaxonName (cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.tissueName) {
        var range = []
        for (var i = 0; i < res.data.tissueName.length; i++) {
          range.push(res.data.tissueName[i].tissueName)
        }
        app.globalData.TaxonName = range
      }
      typeof cb == "function" && cb(app.globalData.TaxonName)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

function getTaxonID(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.tissueID) {
        var range = []
        for (var i = 0; i < res.data.tissueID.length; i++) {
          range.push(res.data.tissueID[i].tissueID)
        }
        app.globalData.TaxonID = range
      }
      typeof cb == "function" && cb(app.globalData.TaxonID)
    },
    fail: function () {
      console.log('fail')
    }
  })
}
 function getStrain(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.tissueStrain) {
        var range = []
        for (var i = 0; i < res.data.tissueStrain.length; i++) {
          range.push(res.data.tissueStrain[i].tissueStrain)
        }
        app.globalData.Strain = range
      }
      typeof cb == "function" && cb(app.globalData.Strain)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

function getSystem (cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.Source_TissueSystem) {
        var range = []
        for (var i = 0; i < res.data.Source_TissueSystem.length; i++) {
          range.push(res.data.Source_TissueSystem[i].Source_TissueSystem)
        }
        app.globalData.System = range
      }
      typeof cb == "function" && cb(app.globalData.System)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

function getOrgan(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.Source_TissueOrgan) {
        var range = []
        for (var i = 0; i < res.data.Source_TissueOrgan.length; i++) {
          range.push(res.data.Source_TissueOrgan[i].Source_TissueOrgan)
        }
        app.globalData.Organ = range
      }
      typeof cb == "function" && cb(app.globalData.Organ)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

function getStructure(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.Source_TissueStructure) {
        var range = []
        for (var i = 0; i < res.data.Source_TissueStructure.length; i++) {
          range.push(res.data.Source_TissueStructure[i].Source_TissueStructure)
        }
        app.globalData.Structure = range
      }
      typeof cb == "function" && cb(app.globalData.Structure)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

function getCellName(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log(res)
      if (res.data.Cell_Name) {
        var range = []
        for (var i = 0; i < res.data.Cell_Name.length; i++) {
          range.push(res.data.Cell_Name[i].Cell_Name)
        }
        app.globalData.CellName = range
      }
      typeof cb == "function" && cb(app.globalData.CellName)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

function getGenotype(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log('Genotype res ',res)
      if (res.data.Genotypes) {
        var range = []
        for (var i = 0; i < res.data.Genotypes.length; i++) {
          range.push(res.data.Genotypes[i].Genotype)
        }
        app.globalData.Genotypes = range
      }
      typeof cb == "function" && cb(app.globalData.Genotypes)
    },
    fail: function (res) {
      console.log('fail res',res)
    }
  })
}

function getTreatmentDetail(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      // console.log('getTreatmentDetail res ', res)
      if (res.data.all_detail) {
        var range = []
        for (var i = 0; i < res.data.all_detail.length; i++) {
          range.push(res.data.all_detail[i].all_detail)
        }
        app.globalData.all_detail = range
      }
      typeof cb == "function" && cb(app.globalData.all_detail)
    },
    fail: function () {
      console.log('fail')
    }
  })
} 

function getParamUnit(cb, URL) {
  wx.request({
    url: URL,
    success: function (res) {
      console.log('ParamUnit success',res)
      if (res.data.unit_detail) {
        var range = []
        for (var i = 0; i < res.data.unit_detail.length; i++) {
          range.push(res.data.unit_detail[i].unit_detail)
        }
        app.globalData.unit_detail = range
      }
      typeof cb == "function" && cb(app.globalData.unit_detail)
    },
    fail: function () {
      console.log('fail')
    }
  })
}

module.exports = {
  getTaxonName: getTaxonName,
  getTaxonID: getTaxonID,
  getStrain: getStrain,
  getSystem: getSystem,
  getOrgan: getOrgan,
  getStructure: getStructure,
  getCellName: getCellName,
  getGenotype: getGenotype,
  getTreatmentDetail: getTreatmentDetail,
  getParamUnit: getParamUnit
}