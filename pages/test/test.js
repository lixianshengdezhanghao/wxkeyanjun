

var TargetGeneNumberList = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
  { name: "4", id: "4" },
  { name: "5", id: "5" },
  { name: "6", id: "6" },
  { name: "7", id: "7" },
]

var TaxonIDList = [
  '10036','10090','10116','10141','15368','34284',
  '3659','3702','39947','4097','413997','4538','4565','4577',
  '481805','4896','49039','54126','632','7227','764097','764099',
  '764100','764101','764102','7668','7955','7959','8355','8932',
  '9541','9544','9606','9823','9913','9925','9986','None'
]
var GeneSymbol = [ ] , GeneID = [] , TaxonID = []

var TargetGene = {
    data:{
      TargetGeneNumberList: TargetGeneNumberList,
      TaxonIDList: TaxonIDList,
      TaxonID: TaxonID,
      index_taxonid:-1,
      Index:[0,0,0,0,0,0,0,0,0,0]
    },
    formSubmit:function(e){
        console.log('submit',e)
    }
}

for (var i = 0; i < TargetGeneNumberList.length; i++) {
  (function (item) {
    TargetGene['bindGeneSymbol' + item.id] = function (e) {
      console.log('e', e)
      console.log('this.data.GeneSymbol',GeneSymbol)
      console.log(typeof (GeneSymbol))
      var id = parseInt(e.currentTarget.dataset.typeid)
      GeneSymbol =  e.detail.value
      console.log('this.data.GeneSymbol', GeneSymbol)
    }
    TargetGene['bindGeneID' + item.id] = function (e) {
      console.log('e', e)
      console.log('this.data.GeneID', GeneID)
      console.log(typeof (GeneID))
      var id = parseInt(e.currentTarget.dataset.typeid)
      GeneID = e.detail.value
      console.log('this.data.GeneID', GeneID)
    }
    TargetGene['bindTaxonID' + item.id] = function (e) {
      console.log('')

      console.log('e',e)
      let indexArray = this.data.Index
      let id = parseInt(e.currentTarget.dataset.typeid)
      console.log('e.detatl.value', e.detail.value)
      console.log(typeof (e.detail.value))
      indexArray[id] = parseInt(e.detail.value)
      this.setData({
        Index: indexArray
      })
      console.log('Index',this.data.Index)
    }
  })(TargetGeneNumberList[i])
}


Page(TargetGene)  
