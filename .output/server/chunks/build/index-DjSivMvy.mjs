import { _ as _imports_0, a as _imports_1, b as _imports_4, c as _imports_5, d as _imports_6, e as _imports_7, f as _imports_8, g as _imports_9, h as _imports_10, E as ElImage, i as ElRow, j as ElCol } from './fonts-CaMXHx1s.mjs';
import { _ as _imports_1$1 } from './virtual_public-CUmESRHv.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_3 } from './virtual_public-Dfc02dP2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-unified';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showGroup = ref(false);
    const activetab = ref(1);
    const teachingcard = ref(0);
    const setActiveTab = (id) => {
      activetab.value = id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-c4a17685><div class="top" data-v-c4a17685><div class="topcontainer" data-v-c4a17685><div class="tname" data-v-c4a17685>Dingming Wu</div><div class="tintro" data-v-c4a17685>Associate Professor<br data-v-c4a17685>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-c4a17685><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon_address" data-v-c4a17685><span class="locationtext" data-v-c4a17685>Zhiteng Building 618-2</span></div><div class="temail" data-v-c4a17685><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon_email" data-v-c4a17685><span class="emailtext" data-v-c4a17685>dingming@szu.edu.cn</span></div><img${ssrRenderAttr("src", _imports_3)} alt="" class="teacherimg" data-v-c4a17685></div></div><p class="text" data-v-c4a17685> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms, and programming. Priorities are given to those who have backgrounds on data management or data mining. </p><div class="research" data-v-c4a17685><div class="rtitle" data-v-c4a17685><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="rellipse" data-v-c4a17685><p class="title" data-v-c4a17685>Research</p><div class="rline1" data-v-c4a17685></div><div class="rline2" data-v-c4a17685></div></div><p class="ri" data-v-c4a17685>Research Interests</p><div class="rifield" data-v-c4a17685><p class="ritext" data-v-c4a17685> My general research area is data management. Recently, much of my research concerns problems from large graph data and spatial data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Selected-projects" data-v-c4a17685>Selected projects</p><div class="group" data-v-c4a17685><p class="gtitle" data-v-c4a17685>GREAT: Generalized Reservoir Sampling based Triangle Counting Estimation over Streaming Graphs (VLDB 2025)</p><p class="gintro" data-v-c4a17685>The number of triangles of a streaming graph is a crucial metric with various applications, such as network evolution analysis, community detection, and anomaly detection. A practical solution for triangle counting in streaming graphs is the sampling-based approximation. Although a lot of research efforts have been devoted to the fixed-sized memory based algorithms, they suffer from the accuracy and the efficiency issues. To tackle these issues, we first propose the generalized reservoir sampling (GRS), which stores less edges for reducing the computational cost and can still generate uniformly random edge sample in the streaming graph. Then, we propose the GREAT algorithm based on GRS for efficient and accurate triangle counting estimation. To further improve the estimation accuracy, we propose the GREAT+ algorithm for considering the dynamic timestamp interval distribution in real-world streaming graphs so that triangles with short and long timestamp intervals will be sampled following the ground-truth distribution. Extensive evaluations on real datasets demonstrate the efficiency and the accuracy of our algorithms. The relative error of our algorithm GREAT+ is significantly (an order of magnitude) better than the competitors. </p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-c4a17685><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/dynamicinterval.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/dynamicinterval.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/reservoir.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/reservoir.png"]
      }, null, _parent));
      _push(`</div></div></div><div class="group2" data-v-c4a17685><p class="gtitle" data-v-c4a17685>Efficient and Accurate PageRank Approximation on Large Graphs (SIGMOD 2025)</p><p class="gintro" data-v-c4a17685>PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.</p><div style="${ssrRenderStyle({ "display": "flex", "position": "relative" })}" class="gimgs" data-v-c4a17685><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project1_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/project1_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project1_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/project1_2.png"]
      }, null, _parent));
      _push(`</div></div></div>`);
      if (showGroup.value) {
        _push(`<div class="group3" data-v-c4a17685><p class="gtitle" data-v-c4a17685>Spatially Compact Dense Block Mining in Spatial Tensors (KDD 2025)</p><p class="gintro" data-v-c4a17685>Spatial tensors have been extensively used in a wide range of applications, including remote sensing, geospatial information systems, conservation planning, and urban planning. We study the problem of Spatially Compact Dense (SCD) block mining in a spatial tensor, which targets for discovering dense blocks that cover small spatial regions. However, most of existing dense block mining (DBM) algorithms cannot solve the SCD-block mining problem since they only focus on maximizing the density of candidate blocks, so that the discovered blocks are spatially loose, i.e., covering large spatial regions. Therefore, we first formulate the problem of mining top-k Spatially Compact Dense blocks (SCD-blocks) in spatial tensors, which ranks SCD-blocks based on a new scoring function that takes both the density value and the spatial coverage into account. Then, we adopt a filter-refinement framework that first generates candidate SCD-blocks with good scores in the filtering phase and then uses the traditional DBM algorithm to further maximize the density values of the candidates in the refinement phase. Due to the NP-hardness of the problem, we develop two types of solutions in the filtering phase, namely the top-down solution and the bottom-up solution, which can find good candidate SCD-blocks by approximately solving the new scoring function. The evaluations on four real datasets verify that compared with the dense blocks returned by existing DBM algorithms, the proposed solutions are able to find SCD-blocks with comparable density values and significantly smaller spatial coverage. </p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-c4a17685><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/Eorder.png`,
          fit: "cover",
          alt: "",
          class: "gimg1",
          "preview-src-list": ["/academicpage/image/Eorder.png"]
        }, null, _parent));
        _push(`</div><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/amplify_Texas.png`,
          fit: "cover",
          alt: "",
          class: "gimg2",
          "preview-src-list": ["/academicpage/image/amplify_Texas.png"]
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showGroup.value) {
        _push(`<div class="group3" data-v-c4a17685><p class="gtitle" data-v-c4a17685>Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs (TKDE 2024)</p><p class="gintro" data-v-c4a17685>Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.</p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-c4a17685><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/project2_1.png`,
          fit: "cover",
          alt: "",
          class: "gimg1",
          "preview-src-list": ["/academicpage/image/project2_1.png"]
        }, null, _parent));
        _push(`</div><div class="image-container" data-text="Click to view" data-v-c4a17685>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: `/academicpage/image/project2_2.png`,
          fit: "cover",
          alt: "",
          class: "gimg2",
          "preview-src-list": ["/academicpage/image/project2_2.png"]
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p style="${ssrRenderStyle({ "display": "flex", "margin-top": "24px", "height": "30px", "line-height": "30px", "color": "#2F81FC", "font-weight": "400", "font-size": "14px" })}" data-v-c4a17685><button class="toggle-button" data-v-c4a17685>${ssrInterpolate(showGroup.value ? "FOLD" : "If you want to view more projects, please click MORE")} `);
      if (showGroup.value) {
        _push(`<img${ssrRenderAttr("src", _imports_4)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "10px" })}" data-v-c4a17685>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_5)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "10px" })}" data-v-c4a17685>`);
      }
      _push(`</button></p></div><div class="achievement" data-v-c4a17685><img${ssrRenderAttr("src", _imports_6)} alt="" class="aellipse" data-v-c4a17685><p class="atitle" data-v-c4a17685>Achievements</p><div class="aline1" data-v-c4a17685></div><div class="aline2" data-v-c4a17685></div><div class="achievements" data-v-c4a17685>`);
      _push(ssrRenderComponent(_component_el_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              span: 2,
              xs: 0
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 8,
              xs: 24
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="abuttons" data-v-c4a17685${_scopeId2}><button class="${ssrRenderClass([{ "selecttab": activetab.value === 1 }, "abutton"])}" data-v-c4a17685${_scopeId2}>Research Awards</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 2 }, "abutton"])}" data-v-c4a17685${_scopeId2}>Research Grants</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 3 }, "abutton"])}" data-v-c4a17685${_scopeId2}>Research Publications</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 4 }, "abutton"])}" data-v-c4a17685${_scopeId2}>Patents</button></div><div class="dblp" data-v-c4a17685${_scopeId2}><a href="https://dblp.org/pid/81/6181.html" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-c4a17685${_scopeId2}>[DBLP]</a>  <a href="https://scholar.google.com/citations?user=oRbQlsEAAAAJ&amp;hl=en" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-c4a17685${_scopeId2}>[Google Scholar]</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "abuttons" }, [
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 1 }],
                        onClick: ($event) => setActiveTab(1)
                      }, "Research Awards", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 2 }],
                        onClick: ($event) => setActiveTab(2)
                      }, "Research Grants", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 3 }],
                        onClick: ($event) => setActiveTab(3)
                      }, "Research Publications", 10, ["onClick"]),
                      createVNode("button", {
                        class: ["abutton", { "selecttab": activetab.value === 4 }],
                        onClick: ($event) => setActiveTab(4)
                      }, "Patents", 10, ["onClick"])
                    ]),
                    createVNode("div", { class: "dblp" }, [
                      createVNode("a", {
                        href: "https://dblp.org/pid/81/6181.html",
                        target: "_blank",
                        style: { "color": "#2F81FC" }
                      }, "[DBLP]"),
                      createTextVNode("  "),
                      createVNode("a", {
                        href: "https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",
                        target: "_blank",
                        style: { "color": "#2F81FC" }
                      }, "[Google Scholar]")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 12,
              xs: 24
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (activetab.value === 1) {
                    _push3(`<div class="atext" data-v-c4a17685${_scopeId2}><p data-v-c4a17685${_scopeId2}>2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p><p data-v-c4a17685${_scopeId2}>2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 2) {
                    _push3(`<div class="atext" data-v-c4a17685${_scopeId2}><p data-v-c4a17685${_scopeId2}>项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。</p><p data-v-c4a17685${_scopeId2}>项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。</p><p data-v-c4a17685${_scopeId2}>项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。</p><p data-v-c4a17685${_scopeId2}>项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 3) {
                    _push3(`<div class="atext" data-v-c4a17685${_scopeId2}><p data-v-c4a17685${_scopeId2}>Siyue Wu, Dingming Wu, Sinhong Cheuk, Tsz Nam Chan, Kezhong Lu: GREAT: Generalized Reservoir Sampling based Triangle Counting Estimation over Streaming Graphs. Proc. VLDB Endow. 18(7): 2031-2043 (2025)</p><p data-v-c4a17685${_scopeId2}>Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen: Large-Scale Spatiotemporal Kernel Density Visualization. ICDE 2025: 99-113</p><p data-v-c4a17685${_scopeId2}>Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu: Spatially Compact Dense Block Mining in Spatial Tensors. KDD (1) 2025: 1349-1360</p><p data-v-c4a17685${_scopeId2}>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)</p><p data-v-c4a17685${_scopeId2}>Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu: LION: Fast and High-Resolution Network Kernel Density Visualization. Proc. VLDB Endow. 17(6): 1255-1268 (2024)</p><p data-v-c4a17685${_scopeId2}>Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U: LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization. Proc. VLDB Endow. 17(13): 4585-4598 (2024)</p><p data-v-c4a17685${_scopeId2}>Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)</p><p data-v-c4a17685${_scopeId2}>Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)</p><p data-v-c4a17685${_scopeId2}>Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p><p data-v-c4a17685${_scopeId2}>Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)</p><p data-v-c4a17685${_scopeId2}>Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 4) {
                    _push3(`<div class="atext" data-v-c4a17685${_scopeId2}><p data-v-c4a17685${_scopeId2}>发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，专利号：ZL 202410055975.8，授权公布日：2024.06.11</p><p data-v-c4a17685${_scopeId2}>发明名称：一种频繁子图挖掘方法和终端设备，发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，专利号：ZL 202310430972.3，授权公布日：2023.11.28</p><p data-v-c4a17685${_scopeId2}>发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，发明人：吴定明；周钰棋；陆克中；詹金颖，专利号：ZL 202111472336.4，授权公布日：2022.05.20</p><p data-v-c4a17685${_scopeId2}>发明名称：RDF数据中天际线位置节点查询方法、装置和设备，发明人：吴定明；张钊奋；陆克中，专利号：ZL 202210026117.1，授权公布日：2022.05.17</p><p data-v-c4a17685${_scopeId2}>发明名称：一种活动与同伴的检索方法及系统，发明人：吴定明；朱艺；黄哲学，专利号：ZL 201810294059.4，授权公布日：2021.08.06</p><p data-v-c4a17685${_scopeId2}>发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，发明人：吴定明；罗德新；黄哲学，专利号：ZL 201710821358.4，授权公布日：2020.12.04</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activetab.value === 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "atext"
                    }, [
                      createVNode("p", null, "2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                      createVNode("p", null, "2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                    ])) : createCommentVNode("", true),
                    activetab.value === 2 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "atext"
                    }, [
                      createVNode("p", null, "项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。"),
                      createVNode("p", null, "项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。"),
                      createVNode("p", null, "项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。"),
                      createVNode("p", null, "项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。")
                    ])) : createCommentVNode("", true),
                    activetab.value === 3 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "atext"
                    }, [
                      createVNode("p", null, "Siyue Wu, Dingming Wu, Sinhong Cheuk, Tsz Nam Chan, Kezhong Lu: GREAT: Generalized Reservoir Sampling based Triangle Counting Estimation over Streaming Graphs. Proc. VLDB Endow. 18(7): 2031-2043 (2025)"),
                      createVNode("p", null, "Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen: Large-Scale Spatiotemporal Kernel Density Visualization. ICDE 2025: 99-113"),
                      createVNode("p", null, "Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu: Spatially Compact Dense Block Mining in Spatial Tensors. KDD (1) 2025: 1349-1360"),
                      createVNode("p", null, "Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)"),
                      createVNode("p", null, "Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu: LION: Fast and High-Resolution Network Kernel Density Visualization. Proc. VLDB Endow. 17(6): 1255-1268 (2024)"),
                      createVNode("p", null, "Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U: LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization. Proc. VLDB Endow. 17(13): 4585-4598 (2024)"),
                      createVNode("p", null, "Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)"),
                      createVNode("p", null, "Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)"),
                      createVNode("p", null, "Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                      createVNode("p", null, "Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)"),
                      createVNode("p", null, "Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                    ])) : createCommentVNode("", true),
                    activetab.value === 4 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "atext"
                    }, [
                      createVNode("p", null, "发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，专利号：ZL 202410055975.8，授权公布日：2024.06.11"),
                      createVNode("p", null, "发明名称：一种频繁子图挖掘方法和终端设备，发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，专利号：ZL 202310430972.3，授权公布日：2023.11.28"),
                      createVNode("p", null, "发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，发明人：吴定明；周钰棋；陆克中；詹金颖，专利号：ZL 202111472336.4，授权公布日：2022.05.20"),
                      createVNode("p", null, "发明名称：RDF数据中天际线位置节点查询方法、装置和设备，发明人：吴定明；张钊奋；陆克中，专利号：ZL 202210026117.1，授权公布日：2022.05.17"),
                      createVNode("p", null, "发明名称：一种活动与同伴的检索方法及系统，发明人：吴定明；朱艺；黄哲学，专利号：ZL 201810294059.4，授权公布日：2021.08.06"),
                      createVNode("p", null, "发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，发明人：吴定明；罗德新；黄哲学，专利号：ZL 201710821358.4，授权公布日：2020.12.04")
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                span: 2,
                xs: 0
              }),
              createVNode(_component_el_col, {
                span: 8,
                xs: 24
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "abuttons" }, [
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 1 }],
                      onClick: ($event) => setActiveTab(1)
                    }, "Research Awards", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 2 }],
                      onClick: ($event) => setActiveTab(2)
                    }, "Research Grants", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 3 }],
                      onClick: ($event) => setActiveTab(3)
                    }, "Research Publications", 10, ["onClick"]),
                    createVNode("button", {
                      class: ["abutton", { "selecttab": activetab.value === 4 }],
                      onClick: ($event) => setActiveTab(4)
                    }, "Patents", 10, ["onClick"])
                  ]),
                  createVNode("div", { class: "dblp" }, [
                    createVNode("a", {
                      href: "https://dblp.org/pid/81/6181.html",
                      target: "_blank",
                      style: { "color": "#2F81FC" }
                    }, "[DBLP]"),
                    createTextVNode("  "),
                    createVNode("a", {
                      href: "https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en",
                      target: "_blank",
                      style: { "color": "#2F81FC" }
                    }, "[Google Scholar]")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                span: 12,
                xs: 24
              }, {
                default: withCtx(() => [
                  activetab.value === 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "atext"
                  }, [
                    createVNode("p", null, "2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                    createVNode("p", null, "2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                  ])) : createCommentVNode("", true),
                  activetab.value === 2 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "atext"
                  }, [
                    createVNode("p", null, "项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。"),
                    createVNode("p", null, "项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。"),
                    createVNode("p", null, "项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。"),
                    createVNode("p", null, "项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。")
                  ])) : createCommentVNode("", true),
                  activetab.value === 3 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "atext"
                  }, [
                    createVNode("p", null, "Siyue Wu, Dingming Wu, Sinhong Cheuk, Tsz Nam Chan, Kezhong Lu: GREAT: Generalized Reservoir Sampling based Triangle Counting Estimation over Streaming Graphs. Proc. VLDB Endow. 18(7): 2031-2043 (2025)"),
                    createVNode("p", null, "Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen: Large-Scale Spatiotemporal Kernel Density Visualization. ICDE 2025: 99-113"),
                    createVNode("p", null, "Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu: Spatially Compact Dense Block Mining in Spatial Tensors. KDD (1) 2025: 1349-1360"),
                    createVNode("p", null, "Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)"),
                    createVNode("p", null, "Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu: LION: Fast and High-Resolution Network Kernel Density Visualization. Proc. VLDB Endow. 17(6): 1255-1268 (2024)"),
                    createVNode("p", null, "Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U: LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization. Proc. VLDB Endow. 17(13): 4585-4598 (2024)"),
                    createVNode("p", null, "Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)"),
                    createVNode("p", null, "Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)"),
                    createVNode("p", null, "Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)"),
                    createVNode("p", null, "Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)"),
                    createVNode("p", null, "Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)")
                  ])) : createCommentVNode("", true),
                  activetab.value === 4 ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "atext"
                  }, [
                    createVNode("p", null, "发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，专利号：ZL 202410055975.8，授权公布日：2024.06.11"),
                    createVNode("p", null, "发明名称：一种频繁子图挖掘方法和终端设备，发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，专利号：ZL 202310430972.3，授权公布日：2023.11.28"),
                    createVNode("p", null, "发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，发明人：吴定明；周钰棋；陆克中；詹金颖，专利号：ZL 202111472336.4，授权公布日：2022.05.20"),
                    createVNode("p", null, "发明名称：RDF数据中天际线位置节点查询方法、装置和设备，发明人：吴定明；张钊奋；陆克中，专利号：ZL 202210026117.1，授权公布日：2022.05.17"),
                    createVNode("p", null, "发明名称：一种活动与同伴的检索方法及系统，发明人：吴定明；朱艺；黄哲学，专利号：ZL 201810294059.4，授权公布日：2021.08.06"),
                    createVNode("p", null, "发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，发明人：吴定明；罗德新；黄哲学，专利号：ZL 201710821358.4，授权公布日：2020.12.04")
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ps" data-v-c4a17685><div class="pstitle" data-v-c4a17685><img${ssrRenderAttr("src", _imports_7)} alt="" class="pellipse" data-v-c4a17685><p class="ptitle" data-v-c4a17685>Professional Services</p><div class="pline1" data-v-c4a17685></div><div class="pline2" data-v-c4a17685></div></div><table style="${ssrRenderStyle({ "border-collapse": "separate", "border-spacing": "0px 24px" })}" data-v-c4a17685><tbody data-v-c4a17685><tr data-v-c4a17685><td class="tdtitle" data-v-c4a17685>Journal Referee</td><td class="tdtext" data-v-c4a17685><p data-v-c4a17685>The International Journal on Very Large Data Bases (VLDBJ)</p><p data-v-c4a17685>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p></td></tr><tr data-v-c4a17685><td class="tdtitle" data-v-c4a17685>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-c4a17685><p data-v-c4a17685>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2026, 2025, 2024</p><p data-v-c4a17685>IEEE International Conference on Data Engineering (ICDE) 2026, 2025, 2022</p><p data-v-c4a17685>AAAI Conference on Artificial Intelligence 2024, 2022</p><p data-v-c4a17685>International Joint Conference on Artificial Intelligence (IJCAI) 2021</p></td></tr></tbody><colgroup data-v-c4a17685><col data-v-c4a17685><col data-v-c4a17685></colgroup></table></div><div class="teaching" data-v-c4a17685><div class="teachingtitle" data-v-c4a17685><img${ssrRenderAttr("src", _imports_8)} alt="" class="tellipse" data-v-c4a17685><p class="ptitle" data-v-c4a17685>Teaching</p><div class="pline1" data-v-c4a17685></div><div class="pline2" data-v-c4a17685></div></div><div class="card" data-v-c4a17685><div class="course" data-v-c4a17685><p class="ctitle" data-v-c4a17685>Courses</p><div class="ctext" data-v-c4a17685><p data-v-c4a17685>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-c4a17685>Data Structures (Fall 2024-2019)</p><p data-v-c4a17685>Big Data Processing and Analytics (Spring 2019)</p><p data-v-c4a17685>Introdution to Big Data (Fall 2018-2017)</p><p data-v-c4a17685>Information Retrieval (Spring 2018-2017)</p><p data-v-c4a17685>Search Engine Technology (Fall 2016)</p></div><button class="more1" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c4a17685> MORE <img${ssrRenderAttr("src", _imports_9)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-c4a17685></button></div><div class="at" data-v-c4a17685><p class="ctitle" data-v-c4a17685>Awards</p><div class="ctext" data-v-c4a17685><p data-v-c4a17685>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-c4a17685>2023年广东省一流本科课程，算法设计与分析</p><p data-v-c4a17685>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div><button class="more2" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c4a17685> MORE <img${ssrRenderAttr("src", _imports_9)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-c4a17685></button></div><div class="tutorials" data-v-c4a17685><p class="ctitle" data-v-c4a17685>Students</p><div class="ctext" data-v-c4a17685><h1 data-v-c4a17685>在读学生</h1><p data-v-c4a17685>博士生：伍斯玥，熊子谞，林健，Anastasiia Garanina</p><p data-v-c4a17685>硕士生：刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申，韦旭南，张浩然</p><br data-v-c4a17685><h1 data-v-c4a17685>毕业学生</h1><p data-v-c4a17685>全俊熠，腾讯，2025</p><p data-v-c4a17685>卓仙鸿，平安银行，2025</p><p data-v-c4a17685>黄经研，美的集团，2025</p><p data-v-c4a17685>唐伟科，腾讯，优秀毕业生，2025</p><p data-v-c4a17685>赖新颖，华为，2024</p><p data-v-c4a17685>吕华彬，九维数据技术有限公司，2024</p><p data-v-c4a17685>袁楚杰，字节跳动，2024</p><p data-v-c4a17685>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生，2024</p><p data-v-c4a17685>朱思潼，公务员（国家税务总局广州市税务局），2024</p><p data-v-c4a17685>李密，招银网络科技有限公司，2023</p><p data-v-c4a17685>杜国良，广州凯媒通讯技术有限公司，2023</p><p data-v-c4a17685>吴亿欣，中国人寿保险股份有限公司，2023</p><p data-v-c4a17685>周钰琪，公务员（深圳市社会保险基金管理局宝安分局），2023</p><p data-v-c4a17685>吴松，读博（Utrecht University, Netherlands），2022</p><p data-v-c4a17685>林俊杰，招银网络科技有限公司，2022</p><p data-v-c4a17685>陈萌，上海微创医疗机器人，2022</p><p data-v-c4a17685>詹金颖，华为，2022</p><p data-v-c4a17685>李昕宸，读博（深圳大学），2021</p><p data-v-c4a17685>侯灿，建信金融科技公司，2020</p><p data-v-c4a17685>周豪，华为，2020</p><p data-v-c4a17685>罗德新，腾讯，2019</p><p data-v-c4a17685>朱艺，字节跳动，优秀毕业生，2019</p></div><button class="more3" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c4a17685> MORE <img${ssrRenderAttr("src", _imports_9)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-c4a17685></button></div></div><div class="book" data-v-c4a17685><p class="booktitle" data-v-c4a17685>Books</p><div class="booktext" data-v-c4a17685><p data-v-c4a17685>《Mastering the Academic Writing Mindset》，Springer Nature</p><p data-v-c4a17685>《算法设计与分析实践案例解析》，清华大学出版社</p><p data-v-c4a17685>《算法设计与分析》，清华大学出版社</p></div></div><div id="overlay" class="overlay" data-v-c4a17685></div>`);
      if (teachingcard.value === 1) {
        _push(`<div class="coursebig" data-v-c4a17685><p class="titlebig" data-v-c4a17685>Course</p><div class="textbig" data-v-c4a17685><p data-v-c4a17685>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-c4a17685>Data Structures (Fall 2024-2019)</p><p data-v-c4a17685>Big Data Processing and Analytics (Spring 2019)</p><p data-v-c4a17685>Introdution to Big Data (Fall 2018-2017)</p><p data-v-c4a17685>Information Retrieval (Spring 2018-2017)</p><p data-v-c4a17685>Search Engine Technology (Fall 2016)</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c4a17685> FOLD <img${ssrRenderAttr("src", _imports_10)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-c4a17685></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 2) {
        _push(`<div class="coursebig" data-v-c4a17685><p class="titlebig" data-v-c4a17685>Awards</p><div class="textbig" data-v-c4a17685><p data-v-c4a17685>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-c4a17685>2023年广东省一流本科课程，算法设计与分析</p><p data-v-c4a17685>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c4a17685> FOLD <img${ssrRenderAttr("src", _imports_10)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-c4a17685></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 3) {
        _push(`<div class="coursebig" data-v-c4a17685><p class="titlebig" data-v-c4a17685>Students</p><div class="textbig" data-v-c4a17685><h1 data-v-c4a17685>在读学生</h1><p data-v-c4a17685>博士生：伍斯玥，熊子谞</p><p data-v-c4a17685>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申，韦旭南</p><br data-v-c4a17685><h1 data-v-c4a17685>毕业学生</h1><p data-v-c4a17685>赖新颖，华为，2024</p><p data-v-c4a17685>吕华彬，九维数据技术有限公司，2024</p><p data-v-c4a17685>袁楚杰，字节跳动，2024</p><p data-v-c4a17685>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生，2024</p><p data-v-c4a17685>朱思潼，公务员（国家税务总局广州市税务局），2024</p><p data-v-c4a17685>李密，招银网络科技有限公司，2023</p><p data-v-c4a17685>杜国良，广州凯媒通讯技术有限公司，2023</p><p data-v-c4a17685>吴亿欣，中国人寿保险股份有限公司，2023</p><p data-v-c4a17685>周钰琪，公务员（深圳市社会保险基金管理局宝安分局），2023</p><p data-v-c4a17685>吴松，读博（Utrecht University, Netherlands），2022</p><p data-v-c4a17685>林俊杰，招银网络科技有限公司，2022</p><p data-v-c4a17685>陈萌，上海微创医疗机器人，2022</p><p data-v-c4a17685>詹金颖，华为，2022</p><p data-v-c4a17685>李昕宸，读博（深圳大学），2021</p><p data-v-c4a17685>侯灿，建信金融科技公司，2020</p><p data-v-c4a17685>周豪，华为，2020</p><p data-v-c4a17685>罗德新，腾讯，2019</p><p data-v-c4a17685>朱艺，字节跳动，优秀毕业生，2019</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c4a17685> FOLD <img${ssrRenderAttr("src", _imports_10)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-c4a17685></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="welcome" data-v-c4a17685>Welcome to the Data Management &amp; Intelligence Group in Shenzhen University (SZU).</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4a17685"]]);

export { index as default };
//# sourceMappingURL=index-DjSivMvy.mjs.map
