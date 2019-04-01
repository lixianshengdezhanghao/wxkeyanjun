//存放服务相关内容
module.exports = {
  data: {
    '蛋白质组学定性分析': [{
      "subType": '蛋白全谱分析',
      'productDefinition': ['采用长色谱梯度实现蛋白质组学深度覆盖是目前常用的方法,但该方法质谱分析时间长,且定量准确性不高。为实现蛋白质组学快速深度覆盖及精确定量,快速深度覆盖与定量蛋白质组学技术被发展。该新技术利用一维高pH的色谱分馏复杂蛋白混合物,利用二维低pH的HPLC-MS/MS测定实现蛋白质组学的快速深度覆盖。'],
      'technologyPrinciple': ['样品经蛋白提取、还原烷基化和Trypsin 酶切后,所得肽段通过一维高pH色谱实现对复杂蛋白混合物的分馏,之后所得不同馏分分别进行二维低pH的HPLC-MS/MS测定,整个流程优化后可在12h实现蛋白质组学的快速深度覆盖。'],
      'dataAnalysis': ['1.数据库鉴定数据统计', '2.蛋白质/肽段鉴定及定量结果', '3.差异蛋白质统计分析', '4.蛋白质GO分析及差异蛋白GO分析', '5.蛋白质Pathway代谢通路分析及差异蛋白的Pathway富集分析', '6.重复性分析（仅针对有重复设计的项目）', '7.多样品间聚类分析（适用于样本数≥3的项目）'],
      'technicalAdvantages': ['1.短时间内实现蛋白质组学的深度覆盖,覆盖深度达8000种蛋白', '2.整个前处理过程无需脱盐,简化了实验程序', '3.可对蛋白质组学进行定量分析'],
      'applicationField': ['1.生理条件下组织、细胞或细胞器中所有表达蛋白的鉴定和定量', '2.翻译后修饰蛋白的鉴定和定量'],
      'requirements': ['蛋白提取物：≥50μg', '细胞：≥1000,000', '组织：动物组织≥1mg,植物组织≥10mg', '体液：血清≥5μL,脑脊液≥10μL', '其他样本如有疑问请联系我们'],
      'reference': ['Ding C, Jiang J, Wei J, et al. A fast workflow for identification and quantification of proteomes. Molecular & Cellular Proteomics, 2013, 12(8): 2370-2380.'],
      'img_src':['/images/imgTech/deepCover_figure.png']
    },
      {
        "subType": 'IP、Co-IP、Pull-down后蛋白分析',
        'productDefinition': ['对IP、Co-IP、Pull-down等纯化样本中蛋白质的分析，可鉴定目的蛋白，也可鉴定与目的蛋白相互作用的蛋白，以构建目的蛋白的相互作用谱。'],
        'technologyPrinciple': ['IP、Co-IP、Pull-down等方法所得目的蛋白，可经SDS-PAGE分离后进行胶内酶解，也可直接进行溶液内酶解，之后利用高分辨质谱（LC-MS/MS）对酶解产物分析。'],
        'dataAnalysis': ['1.数据库鉴定数据统计','2.蛋白质 / 肽段鉴定'],
        'technicalAdvantages': ['1.适合IP、Co-IP、Pull-down所得蛋白质的鉴定', '2.灵敏度高、特异性强，实验周期短、通量高'],
        'applicationField': ['目的蛋白及蛋白质相互作用谱的鉴定'],
        'requirements': ['纯化蛋白：≥10μg或考马斯亮蓝染色可见的蛋白胶条带'],
        'reference': [],
        'img_src': ['/images/imgTech/IP-CoIP_Process.png','/images/imgTech/IP-CoIP_figure.png']
      }],

    '蛋白质组学定量分析': [{
        'subType': 'SILAC标记定量',
        'productDefinition': ['SILAC (Stable Isotope Labeling with Amino acids in Cell culture) 即细胞培养条件下稳定同位素标记技术,其为全面、系统地定量分析蛋白质组学提供了有效的解决方案。做为体内标记技术,SILAC几乎不影响细胞的功能,因此其目前广泛应用于蛋白质组学相关领域。'],
        'technologyPrinciple': ['在细胞培养时,分别采用含有轻、中、重同位素型必需氨基酸进行细胞培养（常用稳定同位素标记氨基酸为Lys和Arg）。细胞传代培养过程中,同位素标记氨基酸被用于合成蛋白质,经传代培养5-6代后,稳定同位素标记的氨基酸完全掺入到细胞新合成的蛋白质中。按不同标记细胞的细胞数或蛋白量等量混合后,样品经分离、纯化后进行质谱分析。比较一级质谱图中三种标记肽段的面积进行相对定量,同时利用二级谱图对肽段进行序列测定。'],
        'dataAnalysis': ['1.蛋白质/肽段鉴定及定量结果', '2.差异蛋白质统计分析', '3.蛋白质Pathway通路分析及差异蛋白的Pathway通路分析', '4.多样品间分类统计、功能富集、聚类分析（适用于样本数≥3的项目）'],
        'technicalAdvantages': ['1.高通量,可同时鉴定并定量数千种蛋白质', '2.定量精确,线性范围广,减小由于样品制备不同而造成的实验差异', '3.相容性高,可对在DMEM、DMEM-F12、1640三种培养基中培养的多种细胞进行标记', '4.标记效率高达100%,更接近样品真实状态', '5.灵敏度高,样本量要求少'],
        'applicationField': ['适用于可进行培养的各类细胞的蛋白质组学定量分析'],
        'requirements': ['蛋白提取物：浓度>1ug/ul,蛋白质总量>300ug', '细胞样品：≥107'],
        'reference': ['1. Ong, S.E. & Mann, M. A practical recipe for stable isotope labeling by amino acids in cell culture (SILAC). Nat. Protoc. 1, 2650-2660 (2007).', '2. Sobczyk GJ, Wang J, et al. SILAC-based proteomic quantification of chemoattractant-induced cytoskeleton dynamics on a second to minute timescale. Nature Commun.2014; 5: 3319.', '3. Larance, M. et al. Stable-isotope labeling with amino acids in nematodes. Nature Methods. 8, 849-851 (2011).'],
      "img_src": ['/images/imgTech/SILAC_Process.png', '/images/imgTech/SILAC_figure.png']
      },
      {
        'subType': 'Label-Free非标记定量',
        'productDefinition': ['Label-free技术是一种不依赖于同位素标记的蛋白质定量技术,其直接通过液质联用对蛋白质酶解肽段进行分析。在分析质谱数据时,只需比较不同样本中同一肽段的质谱信号强度和谱图计数,就能对相应的蛋白质进行相对定量。'],
        'technologyPrinciple': ['不同样品分别经蛋白提取、Trypsin酶解、肽段分级以及高精度质谱分析后,比较各样本质谱数据进行蛋白质的相对定量。而质谱数据比较分为两种：一是依据一级质谱相关肽段的峰强度(peak intensity)或峰面积(peak area)等信息进行蛋白定量,二是依据蛋白质对应肽段的二级质谱总数(spectral counts)进行定量。'],
        'dataAnalysis': ['1.数据库鉴定数据统计', '2.蛋白质/肽段鉴定及定量结果', '3.差异蛋白质统计分析', '4.蛋白质GO分析及差异蛋白GO分析', '5.蛋白质Pathway代谢通路分析及差异蛋白的Pathway富集分析', '6.重复性分析（仅针对有重复设计的项目）', '7.多样品间聚类分析（适用于样本数≥3的项目）'],
        'technicalAdvantages': ['1.无需标记,实验耗费低', '2.不受样本条件限制,可对微量样本进行分析', '3.具有宽的动态检测范围,提高了低丰度蛋白质的检测效率'],
        'applicationField': ['1.动植物组织或细胞、微生物、体液的蛋白组鉴定和相对定量', '2.Pull-down方法或免疫沉淀方法富集的蛋白鉴定和相对定量'],
        'requirements': ['蛋白提取物：≥50μg', '细胞：≥106', '组织：动物组织≥1mg,植物组织≥10mg', '体液：血清≥5μL,脑脊液≥10μL', '其他样本如有疑问请联系我们'],
        'reference': ['1、Zhu W, J.W. Smith, and C.M. Huang. Mass spectrometry-based label-free quantitative proteomics. J BIOMED BIOTECHNOL. 2010; 2010: p. 840518.', '2、Ding C, Jiang J, Wei J, et al. A fast workflow for identification and quantification of proteomes, Mol Cell Proteomics. 2013 Aug;12(8):2370-80.', '3、Niemann M, Wiese S, et al. Mitochondrial outer membrane proteome of Trypanosomabrucei reveals novel factors required to maintain mitochondrial morphology. Mol Cell Proteomics. 2013; 12(2): 515-28.', '4、Cholewa BD, Pellitteri-Hahn MC, et al. Large-Scale Label-Free Comparative Proteomics Analysis of Polo-Like Kinase 1 Inhibition via the Small-Molecule Inhibitor BI 6727 (Volasertib) in BRAFV600E Mutant Melanoma Cells. J Proteome Res. 2014 Jun 9.', '5、Vanderschuren H, Nyaboga E, et al. Large-Scale Proteomics of the Cassava Storage Root and Identification of a Target Gene to Reduce Postharvest Deterioration. Plant Cell. 2014.'],
        "img_src": ['/images/imgTech/Label-Free_Process.png', '/images/imgTech/Label-Free_figure.png']
      },
      {
        'subType': 'iTRAQ标记定量',
        'productDefinition': ['iTRAQ(Isobaric Tag for Relative Absolute Quantitation)和TMT(Tandem Mass Tags)技术分别是由美国AB Sciex公司和Thermo公司研发的多肽体外标记定量技术,目前在生物学领域应用广泛。iTRAQ技术采用4种或8种稳定同位素标签,TMT技术采用10种稳定同位素标签,它们特异性标记多肽的氨基基团,然后进行串联质谱分析,可同时比较多达10种不同样本中蛋白质的相对含量。'],
        'technologyPrinciple': ['iTRAQ/TMT试剂由三部分组成：报告基团、平衡基团和反应基团,可形成4种、8种或10种等质量同位素标签。这些试剂通过与多肽氨基末端以及赖氨酸残基伯氨基结合,实现对酶解后多肽的高效标记。在一级质谱图中,来自于不同样本的同一肽段,标记后表现为相同的质荷比。在串联质谱中,报告基团、平衡基团和反应基团之间的键断裂,带不同同位素标签的同一肽段产生质量不同的报告离子,根据报告离子的信号强度值获得样品间相同肽段的定量信息,再经软件处理得到蛋白质的定量信息。'],
        'dataAnalysis': ['1.数据库鉴定数据统计', '2.蛋白质/肽段鉴定及定量结果', '3.差异蛋白质统计分析', '4.蛋白质Pathway代谢通路分析及差异蛋白的Pathway富集分析', '5.多样品间分类统计、功能富集、聚类分析（适用于样本数≥3的项目）'],
        'technicalAdvantages': ['1.适用于各种类型生物样本', '2.可同时对2-10个样本进行蛋白差异分析', '3.蛋白通量高,覆盖度高'],
        'applicationField': ['适用于各种条件下不同样本的蛋白质组定量研究。'],
        'requirements': ['蛋白质提取物：≥100ug', '细胞：≥107', '组织：动物组织≥100mg,植物组织≥10mg', '体液：血清/血浆≥500μL,尿液≥25mL,唾液、脑脊液等体液≥5ml', '其他样本如有疑问请联系我们'],
        'reference': ['1．Richard, D. U.et.al. Simultaneous analysis of relative protein expression levels across multiple samples using iTRAQ isobaric tags with 2D nano LC–MS/MS. Nature Protocols 5, 1574-1582(2010).', '2．Josselin Noirel1. Methods in Quantitative Proteomics: Setting iTRAQ on the Right Track. Current Proteomics 2011, 8, 17-30.', '3．Elias, J. E., Gygi, S. P. Target-decoy search strategy for increased confidence in large-scale protein identifications by mass spectrometry. Nat Methods 2007, 4(3):207–214.', '4．Altelaar A.F., et al. Benchmarking stable isotope labeling based quantitative proteomics. J Proteomics Oct 22. pii: S1874-3919(12)00704-X. doi: 10.1016/j.jprot.2012.10.009.', '5．Zhang, T., et al. (2010). Improving quantitation of TMT-labeled peptides using stepped higher-energy collisional dissociation. Application note # 483www.thermoscientific.com', '6．顾培明,李静. 应用Orbitrap Fusion对TMT标记样本进行MS2定量方法及SPS MS3定量方法的比较.塞默飞世尔（中国）有限公司.Application Notes CM0098.'],
        "img_src": ['/images/imgTech/iTRAQ-TMT_Process.png', '/images/imgTech/iTRAQ-TMT_figure.png']
      },
      {
        'subType': 'TMT标记定量',
        'productDefinition': ['iTRAQ(Isobaric Tag for Relative Absolute Quantitation)和TMT(Tandem Mass Tags)技术分别是由美国AB Sciex公司和Thermo公司研发的多肽体外标记定量技术,目前在生物学领域应用广泛。iTRAQ技术采用4种或8种稳定同位素标签,TMT技术采用10种稳定同位素标签,它们特异性标记多肽的氨基基团,然后进行串联质谱分析,可同时比较多达10种不同样本中蛋白质的相对含量。'],
        'technologyPrinciple': ['iTRAQ/TMT试剂由三部分组成：报告基团、平衡基团和反应基团,可形成4种、8种或10种等质量同位素标签。这些试剂通过与多肽氨基末端以及赖氨酸残基伯氨基结合,实现对酶解后多肽的高效标记。在一级质谱图中,来自于不同样本的同一肽段,标记后表现为相同的质荷比。在串联质谱中,报告基团、平衡基团和反应基团之间的键断裂,带不同同位素标签的同一肽段产生质量不同的报告离子,根据报告离子的信号强度值获得样品间相同肽段的定量信息,再经软件处理得到蛋白质的定量信息。'],
        'dataAnalysis': ['1.数据库鉴定数据统计', '2.蛋白质/肽段鉴定及定量结果', '3.差异蛋白质统计分析', '4.蛋白质Pathway代谢通路分析及差异蛋白的Pathway富集分析', '5.多样品间分类统计、功能富集、聚类分析（适用于样本数≥3的项目）'],
        'technicalAdvantages': ['1.适用于各种类型生物样本', '2.可同时对2-10个样本进行蛋白差异分析', '3.蛋白通量高,覆盖度高'],
        'applicationField': ['适用于各种条件下不同样本的蛋白质组定量研究。'],
        'requirements': ['蛋白质提取物：≥100ug', '细胞：≥107', '组织：动物组织≥100mg,植物组织≥10mg', '体液：血清/血浆≥500μL,尿液≥25mL,唾液、脑脊液等体液≥5ml', '其他样本如有疑问请联系我们'],
        'reference': ['1．Richard, D. U.et.al. Simultaneous analysis of relative protein expression levels across multiple samples using iTRAQ isobaric tags with 2D nano LC–MS/MS. Nature Protocols 5, 1574-1582(2010).', '2．Josselin Noirel1. Methods in Quantitative Proteomics: Setting iTRAQ on the Right Track. Current Proteomics 2011, 8, 17-30.', '3．Elias, J. E., Gygi, S. P. Target-decoy search strategy for increased confidence in large-scale protein identifications by mass spectrometry. Nat Methods 2007, 4(3):207–214.', '4．Altelaar A.F., et al. Benchmarking stable isotope labeling based quantitative proteomics. J Proteomics Oct 22. pii: S1874-3919(12)00704-X. doi: 10.1016/j.jprot.2012.10.009.', '5．Zhang, T., et al. (2010). Improving quantitation of TMT-labeled peptides using stepped higher-energy collisional dissociation. Application note # 483www.thermoscientific.com', '6．顾培明,李静. 应用Orbitrap Fusion对TMT标记样本进行MS2定量方法及SPS MS3定量方法的比较.塞默飞世尔（中国）有限公司.Application Notes CM0098.'],
        "img_src": ['/images/imgTech/iTRAQ-TMT_Process.png', '/images/imgTech/iTRAQ-TMT_figure.png']
      }
    ],
    "修饰蛋白质组学分析":[
      {
          "subType":'蛋白质修饰位点定性分析',
        "productDefinition": ['翻译后修饰蛋白质与许多至关重要的生命进程息息相关，因而揭示翻译后修饰发生规律是解析蛋白质复杂多样的生物功能的一个重要前提。纯化蛋白质经Trypsin酶切后，经质谱检测，数据分析时设置翻译后修饰参数进行数据库搜索，以完成翻译后修饰鉴定。'],
        "technologyPrinciple": ['通过IP、Co-IP、Pull-down等方法得到目的蛋白，经胶内酶解或溶液内酶解后，对酶解产物进行高分辨质谱分析(LC-MS/MS)。在数据分析时，设置翻译后修饰参数进行翻译后修饰鉴定。目前可对磷酸化、糖基化、乙酰化、泛素化等多种修饰类型进行鉴定。'],
        "dataAnalysis": ['蛋白质/肽段各种修饰类型的鉴定'],
        "technicalAdvantages": ['1.无需对修饰蛋白进行富集，修饰位点的鉴定覆盖率高', '2.可结合PRM技术定向检测指定的修饰位点', '3.适合IP、Co-IP、Pull-down蛋白质混合物样品鉴定','4.灵敏度高、特异性强、实验周期短'],
        "applicationField": ['某一生理、病理状态下组织、细胞、体液中翻译后修饰蛋白质的鉴定'],
        "requirements": ['纯化蛋白：≥10μg或考马斯亮蓝染色可见的蛋白胶条带'],
        "reference": ['1. Aebersold R, Mann M. Mass spectrometry-based proteomics. Nature. 2003 Mar 13;422(6928):198-207.','2. Witze ES1, Old WM, Resing KA, Ahn NG. Mapping protein post-translational modifications with mass spectrometry. Nat Methods. 2007 Oct;4(10):798-806.'],
        "img_src": ['/images/imgTech/Modification_Process.png', '/images/imgTech/Modification_figure.png']
      },
      {
        "subType": '糖基化蛋白质组学分析',
        "productDefinition": ['糖基化修饰是在酶的控制下，蛋白质附加上糖类的过程。蛋白质的N-糖基化修饰是最重要的蛋白质翻译后修饰之一，主要在复杂的多细胞或组织形成过程中起关键作用。'],
        "technologyPrinciple": ['蛋白质的N-糖基化修饰位点具有保守的氨基酸序列NX（S/T），其中X为除脯氨酸以外的其它氨基酸，而凝集素（lectin）能识别并结合具有特定糖基序列的单糖或聚糖。被凝集素捕获后糖肽用N-糖酰胺酶（PNGase F）在H218O中切除连接在天冬酰胺残基（Asn）上的糖链，致使Asn分子量增加2.9890Da。采用高精度质谱检测脱糖后肽段，确认脱糖后分子量与其理论分子量的变化以及糖基化修饰肽段的序列，从而确定N-糖基化位点。样品经蛋白抽提、Trypsin 酶解及脱盐后，用凝集素富集N - 糖基化肽段，富集糖肽上的糖链被PNGase F在H218O中切除。之后质谱检测确定糖基化位点。N - 糖基化位点确定后，可采用label - free原理进行定量分析。'],
        "dataAnalysis": ['1.糖基化修饰位点确认分析', '2.完整糖肽结构鉴定及定量', '3.糖蛋白的GO分析及差异蛋白GO分析', '4.糖蛋白的Pathway通路分析及差异蛋白的Pathway通路分析', '5.重复性分析（仅针对有重复设计的项目）','6.多样品间表达模式聚类分析（适用于样本数≥3的项目）'],
        "technicalAdvantages": ['1.凝集素特异性富集糖肽，适用于多种样品类型', '2.可进行糖基化修饰定量分析'],
        "applicationField": ['1.不同条件下糖基化修饰蛋白质组学的变化及信号通路分析','2.筛选糖蛋白标志物'],
        "requirements": ['蛋白提取物：≥2mg', '细胞：≥107','组织：动物组织≥100mg,植物组织≥100 mg'],
        "reference": ['1.  Zielinska DF, Gnad F, et al. Mapping N-glycosylation sites across seven evolutionarily distant species reveals a divergent substrate proteome despite a common core machinery. Mol Cell. 2012; 46(4): 542-8.', '2. Qichen Cao, Cheng Ma, Haihong Bai, Xianyu Li, Hui Yan, Yan Zhao, Wantao Ying* and Xiaohong Qian*. Multivalent Hydrazide-Functionalized Magnetic Nanoparticles for Glycopeptide Enrichment and Identification. Analyst.2014, 139: 603-609'],
        "img_src": ['/images/imgTech/Glycosylation_Process.png', '/images/imgTech/Glycosylation_figure.png']
      },
      {
        "subType": '磷酸化蛋白质组学分析',
        "productDefinition": ['蛋白质磷酸化是调节和控制蛋白质活力和功能的最基本、最普遍，也是最重要的机制。它与信号传导、细胞分裂、生长发育以及癌症机理等诸多生物学问题有密切关系。研究磷酸化修饰蛋白质组学对阐明蛋白质功能具有重要意义。'],
        "technologyPrinciple": ['样品经蛋白抽提、Trypsin 酶解及脱盐后，用TiO2富集磷酸化肽段。酸性条件下，将带正电荷的TiO2与带负电荷的磷酸化肽段进行特异性结合。并在碱性条件下，将磷酸化肽段从TiO2上洗脱下来，达到磷酸化肽段特异性富集的目的。富集完成后，对富集磷酸化肽段进行质谱检测。为最大排除肽段混合物中带负电荷的非磷酸化肽段的干扰，会在TiO2富集缓冲液中加入2,5-二羟基苯甲酸或乳酸。若需对磷酸化修饰蛋白质进行定量分析，则在磷酸化肽段富集前先进行iTRAQ标记，再通过TiO2富集获得高纯度磷酸化肽段，最后进行高分辨率质谱检查以完成定量分析。'],
        "dataAnalysis": ['1.磷酸化肽段的鉴定及定量', '2.磷酸化肽段及蛋白的GO分析及差异蛋白GO分析', '3.磷酸化肽段及蛋白的Pathway通路分析及差异蛋白的Pathway通路分析', '4.重复性分析（仅针对有重复设计的项目）', '5.多样品间表达模式聚类分析（适用于样本数≥3的项目）'],
        "technicalAdvantages": ['1.独特的TiO2富集缓冲液，可特异性富集样品中95%磷酸化肽段', '2.短时间内即可实现8000-10000磷酸化肽段（约3000-4000蛋白）的覆盖','3.可进行定量分析'],
        "applicationField": ['1.不同条件下磷酸化修饰蛋白质组变化及信号通路分析', '2.筛选特定蛋白激酶的磷酸化修饰蛋白质底物'],
        "requirements": ['蛋白提取物：≥2mg', '细胞：≥107', '组织：动物组织≥100mg,植物组织≥100 mg','体液：血清≥20μL，脑脊液≥30μL'],
        "reference": ['1. Thingholm TE, Jørgensen TJ, Jensen ON, Larsen MR. Highly selective enrichment of phosphorylated peptides using titanium dioxide. Nat Protoc. 2006;1(4):1929-35.', '2. Jensen SS, Larsen MR. Evaluation of the impact of some experimental procedures on different phosphopeptide enrichment techniques. Rapid Commun Mass Spectrom. 2007;21(22):3635-45.','3. Nguyen TH, Brechenmacher L, et al. Quantitative phosphoproteomic analysis of soybean root hairs inoculated with Bradyrhizobium japonicum. Mol Cell Proteomics. 2012; 11(11): 1140-55.'],
        "img_src": ['/images/imgTech/Phosphorylation_Process.png', '/images/imgTech/Phosphorylation_figure.png']
      },
      {
        "subType": '泛素化蛋白质组学分析',
        "productDefinition": ['泛素化修饰指泛素分子在一系列特殊酶作用下，选择靶蛋白分子进行特异性修饰的过程。泛素化在蛋白质定位、代谢、功能、调节和降解中都具有重要作用，同时也参与细胞周期、增殖、凋亡、分化、转移、基因表达、转录调节、信号传递、损伤修复、炎症免疫等几乎一切生命活动的调控。此外，泛素化与肿瘤、心血管等疾病的发病密切相关。'],
        "technologyPrinciple": ['经Trypsin酶解后，包含泛素化的赖氨酸会保留有二甘氨酸标签，利用二甘氨酸（diGG）抗体可特异性地富集泛素化修饰肽段。样品经蛋白抽提、Trypsin 酶解及脱盐后，所得肽段与diGG抗体孵育，diGG抗体富集后洗脱泛素化肽段，之后脱盐处理并进行质谱分析。'],
        "dataAnalysis": ['1.泛素化肽的鉴定及定量', '2.泛素化肽及蛋白的GO分析及差异蛋白GO分析', '3.泛素化肽及蛋白的Pathway通路分析及差异蛋白的Pathway通路分析', '4.重复性分析（仅针对有重复设计的项目）', '5.多样品间表达模式聚类分析（适用于样本数≥3的项目）'],
        "technicalAdvantages": ['1.泛素化肽段覆盖率高', '2.可实现高通量泛素化鉴定'],
        "applicationField": ['1.不同条件下泛素化蛋白质组学的鉴定和定量', '2.筛选特定E3泛素连接酶的底物'],
        "requirements": ['蛋白提取物：≥5mg', '细胞：≥108', '组织：动物组织≥100mg,植物组织≥100 mg', '体液：血清≥20μL，脑脊液≥30μL'],
        "reference": ['GuoqiangXu, Jeremy S Paige, and Samie R Jaffrey. Global analysis of lysine ubiquitination by ubiquitin remnant immunoaffinity profiling. Nat Biotechnol. 2010 Aug; 28(8): 868–873.'],
        "img_src": ['/images/imgTech/Ubiquitination_Process.png', '/images/imgTech/Ubiquitination_figure.png']
      },
      {
        "subType": '乙酰化蛋白质组学分析',
        "productDefinition": ['乙酰化修饰指在乙酰基转移酶的作用下，蛋白质的赖氨酸残基上添加乙酰基的过程。该修饰功能集中在对细胞染色体结构的影响以及对核内转录调控因子的激活方面。近年来，大量非细胞核乙酰化修饰蛋白质的发现，揭示生命代谢过程中乙酰化修饰蛋白质远比人们认识要广泛得多，具有广泛生物学意义。'],
        "technologyPrinciple": ['样品经蛋白抽提、Trypsin 酶解及脱盐后，用乙酰化特异性抗体富集乙酰化肽段。富集完成后，对富集磷酸化肽段进行质谱检测，分析数据由生物信息学软件进行数据检索。'],
        "dataAnalysis": ['1.乙酰化修饰位点确认分析', '2.乙酰化蛋白的GO分析及差异蛋白GO分析', '3.磷酸化蛋白的Pathway通路分析及差异蛋白的Pathway通路分析', '4.重复性分析（仅针对有重复设计的项目）','5.多样品间表达模式聚类分析（适用于样本数≥3的项目）'],
        "technicalAdvantages": ['1.乙酰化特异性抗体富集肽段，适用于多种样品类型', '2.可进行乙酰化修饰定量分析'],
        "applicationField": ['1.不同条件下乙酰化修饰蛋白质组变化及信号通路分析', '2.筛选乙酰化修饰蛋白质标志物'],
        "requirements": ['细胞：≥108', '组织：动物组织≥100mg,植物组织≥100 mg', '体液：血清/血浆≥1mL'],
        "reference": ['1. Guo A, Gu H, et al. Immunoaffinity Enrichment and Mass Spectrometry Analysis of Protein Methylation. Mol Cell Proteomics. 2014; 13(1): 372-87.', '2. Tong Z, Kim MS, et al. Identification of Candidate Substrates for the Golgi Tul1 E3 Ligase Using Quantitative diGly Proteomic in Yeast. Mol Cell Proteomics. 2014; 13(11): 2871-82.', '3. Olsen JV, Blagoev B, et al. Global, in vivo, and site-specific phosphorylation dynamics in signaling networks. Cell. 2006; 127(3): 635-48.', '4. Cox J, Mann M. MaxQuant enables high peptide identification rates, individualized p.p.b.-range mass accuracies and proteome-wide protein quantification. Nat Biotechnol. 2008; 26(12): 1367-72.','5. Lundby A, Secher A, et al. Quantitative maps of protein phosphorylation sites across 14 different rat organs and tissues. Nat Commun. 2012; 3: 876.'],
        "img_src": ['/images/imgTech/Acetylation_Process.png']
      }
    ],
    "转录因子DNA结合活性谱分析":[
      {
        "subType": '转录因子DNA结合活性谱分析',
        "productDefinition": ['由于细胞和组织中转录因子含量低，对其在蛋白质组学层面的测定仍面临巨大挑战。转录因子DNA结合活性谱分析技术依据转录因子可与序列特异性DNA元件结合的特点，设计合成了包括100种各类型的转录因子结合序列的串联多拷贝双链DNA结合元件（catTFRE），并将其用生物素标记以包装成“DNA诱饵”，来富集细胞或组织中内源性转录因子以实现其在蛋白质组学层面的鉴定。'],
        "technologyPrinciple": ['提取细胞或组织样品中的核蛋白，经catTFRE-pull down技术，将所得蛋白进行SDS-PAGE分离，胶内酶解以及高精度质谱分析，并采用专业软件进行转录因子分析。'],
        "dataAnalysis": ['1.数据产出统计', '2.转录因子鉴定及定量结果', '3.转录因子下游调控靶基因分析'],
        "technicalAdvantages": ['1.独有专利技术，可对内源性转录因子进行深度覆盖', '2.结合定量蛋白质组学技术，可同时对几百种甚至上千种转录因子与DNA结合序列的结合活性进行分析','3.可动态监测转录因子表达和基因调控活力'],
        "applicationField": ['生理条件下动物细胞或组织中大规模转录因子鉴定和定量'],
        "requirements": ['蛋白核提取物：≥500ug','细胞：≥107', '组织：≥100mg'],
        "reference": ['Ding, Chen, et al. Proteome-wide profiling of activated transcription factors with a concatenated tandem array of transcription factor response elements. Proceedings of the National Academy of Sciences 110.17 (2013): 6771-6776.'],
        "img_src": ['/images/imgTech/TF-DNA_Process.png', '/images/imgTech/TF-DNA_figure.png']
      }
    ]

    
  }
}