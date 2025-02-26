import { _ as _imports_0, a as _imports_1, b as _imports_4, c as _imports_5, d as _imports_6, e as _imports_7, f as _imports_8, E as ElImage, g as ElRow, h as ElCol } from "./fonts-FA0wcNt6.js";
import { _ as _imports_3 } from "./virtual_public-BRi5M4s0.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_2 } from "./virtual_public-OIGxJp94.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash-unified";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "destr";
import "klona";
import "@vue/shared";
import "cookie-es";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wu",
  __ssrInlineRender: true,
  setup(__props) {
    const activetab = ref(1);
    const teachingcard = ref(0);
    const setActiveTab = (id) => {
      activetab.value = id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg" }, _attrs))} data-v-1a58729b><div class="top" data-v-1a58729b><div class="topcontainer" data-v-1a58729b><div class="tname" data-v-1a58729b>Dingming Wu</div><div class="tintro" data-v-1a58729b>Associate Professor<br data-v-1a58729b>College of Computer Science and Software Engineering Shenzhen University</div><div class="tlocation" data-v-1a58729b><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon_address" data-v-1a58729b><span class="locationtext" data-v-1a58729b>Zhiteng Building 618-2</span></div><div class="temail" data-v-1a58729b><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon_email" data-v-1a58729b><span class="emailtext" data-v-1a58729b>dingming@szu.edu.cn</span></div><img${ssrRenderAttr("src", _imports_2)} alt="" class="teacherimg" data-v-1a58729b></div></div><p class="text" data-v-1a58729b> I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science &amp; Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms and programming. Priorities are given to those who have backgrounds on data management or data mining. </p><div class="research" data-v-1a58729b><div class="rtitle" data-v-1a58729b><img${ssrRenderAttr("src", _imports_3)} alt="" class="rellipse" data-v-1a58729b><p class="title" data-v-1a58729b>Research</p><div class="rline1" data-v-1a58729b></div><div class="rline2" data-v-1a58729b></div></div><p class="ri" data-v-1a58729b>Research Interests</p><div class="rifield" data-v-1a58729b><p class="ritext" data-v-1a58729b> My general research area is data management. Recently, much of my research concerns problems from geo-textual, geo-social network, and large graph data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining. </p></div><p class="Selected-projects" data-v-1a58729b>Selected projects</p><div class="group" data-v-1a58729b><p class="gtitle" data-v-1a58729b>Efficient and Accurate PageRank Approximation on Large Graphs</p><p class="gintro" data-v-1a58729b>PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.</p><div style="${ssrRenderStyle({ "display": "flex", "position": "relative" })}" class="gimgs" data-v-1a58729b><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project1_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/project1_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project1_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/project1_2.png"]
      }, null, _parent));
      _push(`</div></div></div><div class="group2" data-v-1a58729b><p class="gtitle" data-v-1a58729b>Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs</p><p class="gintro" data-v-1a58729b>Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.</p><div style="${ssrRenderStyle({ "display": "flex" })}" class="gimgs" data-v-1a58729b><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project2_1.png`,
        fit: "cover",
        alt: "",
        class: "gimg1",
        "preview-src-list": ["/academicpage/image/project2_1.png"]
      }, null, _parent));
      _push(`</div><div class="image-container" data-text="Click to view" data-v-1a58729b>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: `/academicpage/image/project2_2.png`,
        fit: "cover",
        alt: "",
        class: "gimg2",
        "preview-src-list": ["/academicpage/image/project2_2.png"]
      }, null, _parent));
      _push(`</div></div></div></div><div class="achievement" data-v-1a58729b><img${ssrRenderAttr("src", _imports_4)} alt="" class="aellipse" data-v-1a58729b><p class="atitle" data-v-1a58729b>Achievements</p><div class="aline1" data-v-1a58729b></div><div class="aline2" data-v-1a58729b></div><div class="achievements" data-v-1a58729b>`);
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
                  _push3(`<div class="abuttons" data-v-1a58729b${_scopeId2}><button class="${ssrRenderClass([{ "selecttab": activetab.value === 1 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Research Awards</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 2 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Research Grants</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 3 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Research Publications</button><button class="${ssrRenderClass([{ "selecttab": activetab.value === 4 }, "abutton"])}" data-v-1a58729b${_scopeId2}>Patents</button></div><div class="dblp" data-v-1a58729b${_scopeId2}><a href="https://dblp.org/pid/81/6181.html" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-1a58729b${_scopeId2}>[DBLP]</a>  <a href="https://scholar.google.com/citations?user=oRbQlsEAAAAJ&amp;hl=en" target="_blank" style="${ssrRenderStyle({ "color": "#2F81FC" })}" data-v-1a58729b${_scopeId2}>[Google Scholar]</a></div>`);
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
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p><p data-v-1a58729b${_scopeId2}>2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 2) {
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。</p><p data-v-1a58729b${_scopeId2}>项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。</p><p data-v-1a58729b${_scopeId2}>项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。</p><p data-v-1a58729b${_scopeId2}>项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 3) {
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)</p><p data-v-1a58729b${_scopeId2}>Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (activetab.value === 4) {
                    _push3(`<div class="atext" data-v-1a58729b${_scopeId2}><p data-v-1a58729b${_scopeId2}>发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，专利号：ZL 202410055975.8，授权公布日：2024.06.11</p><p data-v-1a58729b${_scopeId2}>发明名称：一种频繁子图挖掘方法和终端设备，发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，专利号：ZL 202310430972.3，授权公布日：2023.11.28</p><p data-v-1a58729b${_scopeId2}>发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，发明人：吴定明；周钰棋；陆克中；詹金颖，专利号：ZL 202111472336.4，授权公布日：2022.05.20</p><p data-v-1a58729b${_scopeId2}>发明名称：RDF数据中天际线位置节点查询方法、装置和设备，发明人：吴定明；张钊奋；陆克中，专利号：ZL 202210026117.1，授权公布日：2022.05.17</p><p data-v-1a58729b${_scopeId2}>发明名称：一种活动与同伴的检索方法及系统，发明人：吴定明；朱艺；黄哲学，专利号：ZL 201810294059.4，授权公布日：2021.08.06</p><p data-v-1a58729b${_scopeId2}>发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，发明人：吴定明；罗德新；黄哲学，专利号：ZL 201710821358.4，授权公布日：2020.12.04</p></div>`);
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
                      createVNode("p", null, "Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)"),
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
                    createVNode("p", null, "Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)"),
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
      _push(`</div></div><div class="ps" data-v-1a58729b><div class="pstitle" data-v-1a58729b><img${ssrRenderAttr("src", _imports_5)} alt="" class="pellipse" data-v-1a58729b><p class="ptitle" data-v-1a58729b>Professional Services</p><div class="pline1" data-v-1a58729b></div><div class="pline2" data-v-1a58729b></div></div><table style="${ssrRenderStyle({ "border-collapse": "separate", "border-spacing": "0px 24px" })}" data-v-1a58729b><tbody data-v-1a58729b><tr data-v-1a58729b><td class="tdtitle" data-v-1a58729b>Journal Referee</td><td class="tdtext" data-v-1a58729b><p data-v-1a58729b>The International Journal on Very Large Data Bases (VLDBJ)</p><p data-v-1a58729b>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p></td></tr><tr data-v-1a58729b><td class="tdtitle" data-v-1a58729b>Conference Program Committee/Reviewer</td><td class="tdtext" data-v-1a58729b><p data-v-1a58729b>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2025, 2024</p><p data-v-1a58729b>IEEE International Conference on Data Engineering (ICDE) 2025, 2022</p><p data-v-1a58729b>AAAI Conference on Artificial Intelligence 2024, 2022</p><p data-v-1a58729b>International Joint Conference on Artificial Intelligence (IJCAI) 2021</p></td></tr></tbody><colgroup data-v-1a58729b><col data-v-1a58729b><col data-v-1a58729b></colgroup></table></div><div class="teaching" data-v-1a58729b><div class="teachingtitle" data-v-1a58729b><img${ssrRenderAttr("src", _imports_6)} alt="" class="tellipse" data-v-1a58729b><p class="ptitle" data-v-1a58729b>Teaching</p><div class="pline1" data-v-1a58729b></div><div class="pline2" data-v-1a58729b></div></div><div class="card" data-v-1a58729b><div class="course" data-v-1a58729b><p class="ctitle" data-v-1a58729b>Courses</p><div class="ctext" data-v-1a58729b><p data-v-1a58729b>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-1a58729b>Data Structures (Fall 2024-2019)</p><p data-v-1a58729b>Big Data Processing and Analytics (Spring 2019)</p><p data-v-1a58729b>Introdution to Big Data (Fall 2018-2017)</p><p data-v-1a58729b>Information Retrieval (Spring 2018-2017)</p><p data-v-1a58729b>Search Engine Technology (Fall 2016)</p></div><button class="more1" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div><div class="at" data-v-1a58729b><p class="ctitle" data-v-1a58729b>Awards</p><div class="ctext" data-v-1a58729b><p data-v-1a58729b>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-1a58729b>2023年广东省一流本科课程，算法设计与分析</p><p data-v-1a58729b>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div><button class="more2" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div><div class="tutorials" data-v-1a58729b><p class="ctitle" data-v-1a58729b>Students</p><div class="ctext" data-v-1a58729b><h1 data-v-1a58729b>在读学生</h1><p data-v-1a58729b>博士生：伍斯玥</p><p data-v-1a58729b>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-1a58729b><h1 data-v-1a58729b>毕业学生</h1><p data-v-1a58729b>赖新颖，华为</p><p data-v-1a58729b>吕华彬，九维数据技术有限公司</p><p data-v-1a58729b>袁楚杰，字节跳动</p><p data-v-1a58729b>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-1a58729b>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-1a58729b>李密，招银网络科技有限公司</p><p data-v-1a58729b>杜国良，广州凯媒通讯技术有限公司</p><p data-v-1a58729b>吴亿欣，中国人寿保险股份有限公司</p><p data-v-1a58729b>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-1a58729b>吴松，读博（Utrecht University, Netherlands）</p><p data-v-1a58729b>林俊杰，招银网络科技有限公司</p><p data-v-1a58729b>陈萌，上海微创医疗机器人</p><p data-v-1a58729b>詹金颖，华为</p><p data-v-1a58729b>李昕宸，读博（深圳大学）</p><p data-v-1a58729b>侯灿，建信金融科技公司</p><p data-v-1a58729b>周豪，华为</p><p data-v-1a58729b>罗德新，腾讯</p><p data-v-1a58729b>朱艺，字节跳动，优秀毕业生</p></div><button class="more3" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> MORE <img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div></div><div class="book" data-v-1a58729b><p class="booktitle" data-v-1a58729b>Books</p><div class="booktext" data-v-1a58729b><p data-v-1a58729b>《算法设计与分析实践案例解析》，清华大学出版社</p><p data-v-1a58729b>《算法设计与分析》，清华大学出版社</p></div></div><div id="overlay" class="overlay" data-v-1a58729b></div>`);
      if (teachingcard.value === 1) {
        _push(`<div class="coursebig" data-v-1a58729b><p class="titlebig" data-v-1a58729b>Course</p><div class="textbig" data-v-1a58729b><p data-v-1a58729b>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p><p data-v-1a58729b>Data Structures (Fall 2024-2019)</p><p data-v-1a58729b>Big Data Processing and Analytics (Spring 2019)</p><p data-v-1a58729b>Introdution to Big Data (Fall 2018-2017)</p><p data-v-1a58729b>Information Retrieval (Spring 2018-2017)</p><p data-v-1a58729b>Search Engine Technology (Fall 2016)</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 2) {
        _push(`<div class="coursebig" data-v-1a58729b><p class="titlebig" data-v-1a58729b>Awards</p><div class="textbig" data-v-1a58729b><p data-v-1a58729b>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p><p data-v-1a58729b>2023年广东省一流本科课程，算法设计与分析</p><p data-v-1a58729b>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (teachingcard.value === 3) {
        _push(`<div class="coursebig" data-v-1a58729b><p class="titlebig" data-v-1a58729b>Students</p><div class="textbig" data-v-1a58729b><h1 data-v-1a58729b>在读学生</h1><p data-v-1a58729b>博士生：伍斯玥</p><p data-v-1a58729b>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申</p><br data-v-1a58729b><h1 data-v-1a58729b>毕业学生</h1><p data-v-1a58729b>赖新颖，华为</p><p data-v-1a58729b>吕华彬，九维数据技术有限公司</p><p data-v-1a58729b>袁楚杰，字节跳动</p><p data-v-1a58729b>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生</p><p data-v-1a58729b>朱思潼，公务员（国家税务总局广州市税务局）</p><p data-v-1a58729b>李密，招银网络科技有限公司</p><p data-v-1a58729b>杜国良，广州凯媒通讯技术有限公司</p><p data-v-1a58729b>吴亿欣，中国人寿保险股份有限公司</p><p data-v-1a58729b>周钰琪，公务员（深圳市社会保险基金管理局宝安分局）</p><p data-v-1a58729b>吴松，读博（Utrecht University, Netherlands）</p><p data-v-1a58729b>林俊杰，招银网络科技有限公司</p><p data-v-1a58729b>陈萌，上海微创医疗机器人</p><p data-v-1a58729b>詹金颖，华为</p><p data-v-1a58729b>李昕宸，读博（深圳大学）</p><p data-v-1a58729b>侯灿，建信金融科技公司</p><p data-v-1a58729b>周豪，华为</p><p data-v-1a58729b>罗德新，腾讯</p><p data-v-1a58729b>朱艺，字节跳动，优秀毕业生</p></div><button class="fold" style="${ssrRenderStyle({ "display": "flex" })}" data-v-1a58729b> FOLD <img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "width": "10px", "height": "10px", "margin-left": "6px", "margin-top": "11px" })}" data-v-1a58729b></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="welcome" data-v-1a58729b>Welcome to the Data Management &amp; Intelligence Group in Shenzhen University (SZU).</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a58729b"]]);
export {
  wu as default
};
//# sourceMappingURL=wu-EH0tGIL4.js.map
