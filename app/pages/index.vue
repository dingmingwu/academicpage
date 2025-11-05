<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="bg">
    <div class="top">
      <div class="topcontainer">
        <div class="tname">Dingming Wu</div>
        <div class="tintro">Associate Professor<br>College of Computer Science and Software Engineering Shenzhen University</div>
        <div class="tlocation">
          <img src="/image/icon_address.png" alt="" class="icon_address">
          <span class="locationtext">Zhiteng Building 618-2</span>
        </div>
        <div class="temail">
          <img src="/image/icon_email.png" alt="" class="icon_email">
          <span class="emailtext">dingming@szu.edu.cn</span>
        </div>
        <img src="/image/wu.png" alt="" class="teacherimg" />
      </div>
    </div>
    <p class="text">
      I obtained my Ph.D. degree in Computer Science from Aalborg University, Denmark in 2011. I received my Master degree in Computer Science from Peking University, China in 2008 and my Bachelor degree in Computer Science from Huazhong University of Science & Techology, China in 2005. I am looking for strong applicants for Postdocs, Ph.D. and Master students. Applicants may have good background in (but not limited to) mathematics, algorithms, and programming. Priorities are given to those who have backgrounds on data management or data mining.
    </p>
    <div class="research">
      <div class="rtitle">
        <img src="/image/pic_blue.png" alt="" class="rellipse">
        <p class="title">Research</p>
        <div class="rline1" />
        <div class="rline2" />
      </div>
      <p class="ri">Research Interests</p>
      <div class="rifield">
        <!-- <div class="rectangle1" /> -->
        <!-- <div class="rectangle2" /> -->
        <!-- <div class="rectangle3" /> -->
        <!-- <div class="rectangle4" /> -->
        <p class="ritext">
          My general research area is data management. Recently, much of my research concerns problems from large graph data and spatial data, including data analytics, approximation algorithms, data modeling, query languages, query processing, and data mining.
        </p>
      </div>
      <p class="Selected-projects">Selected projects</p>
      <div class="group">
        <p class="gtitle">GREAT: Generalized Reservoir Sampling based Triangle Counting Estimation over Streaming Graphs (VLDB 2025)</p>
        <p class="gintro">The number of triangles of a streaming graph is a crucial metric with various applications, such as network evolution analysis, community detection, and anomaly detection. A practical solution for triangle counting in streaming graphs is the sampling-based approximation. Although a lot of research efforts have been devoted to the fixed-sized memory based algorithms, they suffer from the accuracy and the efficiency issues. To tackle these issues, we first propose the generalized reservoir sampling (GRS), which stores less edges for reducing the computational cost and can still generate uniformly random edge sample in the streaming graph. Then, we propose the GREAT algorithm based on GRS for efficient and accurate triangle counting estimation. To further improve the estimation accuracy, we propose the GREAT+ algorithm for considering the dynamic timestamp interval distribution in real-world streaming graphs so that triangles with short and long timestamp intervals will be sampled following the ground-truth distribution. Extensive evaluations on real datasets demonstrate the efficiency and the accuracy of our algorithms. The relative error of our algorithm GREAT+ is significantly (an order of magnitude) better than the competitors. </p>
        <div style="display: flex;" class="gimgs">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/dynamicinterval.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/dynamicinterval.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/reservoir.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/reservoir.png']"/>
          </div>
        </div>
      </div>
      <div class="group2">
        <p class="gtitle">Efficient and Accurate PageRank Approximation on Large Graphs (SIGMOD 2025)</p>
        <p class="gintro">PageRank is a commonly used measurement in a wide range of applications, including search engines, recommendation systems, and social networks. However, this measurement suffers from huge computational overhead, which cannot be scaled to large graphs. Although many approximate algorithms have been proposed for computing PageRank values, these algorithms are either (i) not efficient or (ii) not accurate. Worse still, some of them cannot provide estimated PageRank values for all the vertices. In this paper, we first propose the CUR-Trans algorithm, which can reduce the time complexity for computing PageRank values and has lower error bound than existing matrix approximation-based PageRank algorithms. Then, we develop the T2-Approx algorithm to further reduce the time complexity for computing this measurement. Experiment results on three large-scale graphs show that both the CUR-Trans algorithm and the T2-Approx algorithm achieve the lowest response time for computing PageRank values with the best accuracy (for the CUR-Trans algorithm) or the competitive accuracy (for the T2-Approx algorithm). Besides, the two proposed algorithms are able to provide estimated PageRank values for all the vertices.</p>
        <div style="display: flex; position: relative;" class="gimgs">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project1_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/project1_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project1_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/project1_2.png']"/>
          </div>
        </div>
      </div>
      <div v-if="showGroup" class="group3">
        <p class="gtitle">Spatially Compact Dense Block Mining in Spatial Tensors (KDD 2025)</p>
        <p class="gintro">Spatial tensors have been extensively used in a wide range of applications, including remote sensing, geospatial information systems, conservation planning, and urban planning. We study the problem of Spatially Compact Dense (SCD) block mining in a spatial tensor, which targets for discovering dense blocks that cover small spatial regions. However, most of existing dense block mining (DBM) algorithms cannot solve the SCD-block mining problem since they only focus on maximizing the density of candidate blocks, so that the discovered blocks are spatially loose, i.e., covering large spatial regions. Therefore, we first formulate the problem of mining top-k Spatially Compact Dense blocks (SCD-blocks) in spatial tensors, which ranks SCD-blocks based on a new scoring function that takes both the density value and the spatial coverage into account. Then, we adopt a filter-refinement framework that first generates candidate SCD-blocks with good scores in the filtering phase and then uses the traditional DBM algorithm to further maximize the density values of the candidates in the refinement phase. Due to the NP-hardness of the problem, we develop two types of solutions in the filtering phase, namely the top-down solution and the bottom-up solution, which can find good candidate SCD-blocks by approximately solving the new scoring function. The evaluations on four real datasets verify that compared with the dense blocks returned by existing DBM algorithms, the proposed solutions are able to find SCD-blocks with comparable density values and significantly smaller spatial coverage. </p>
        <div style="display: flex;" class="gimgs">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/Eorder.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/Eorder.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/amplify_Texas.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/amplify_Texas.png']"/>
          </div>
        </div>
      </div>
      <div v-if="showGroup" class="group3">
        <p class="gtitle">Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs (TKDE 2024)</p>
        <p class="gintro">Attributed graphs are graphs, where the vertices have attributes. Such graphs encompass, e.g., social network graph, citation graphs, and knowledge graphs, which have numerous real-world applications. Keyword-based search is a prominent and user-friendly way of querying attributed graphs. One widely used approach to keyword search adopts tree-based query semantics that relies on scoring functions that aggregate distances from a root to keyword-matched vertices. However, it is non-trivial to design scoring functions that capture different users’ keyword preferences. This study defines and solves the skyline KTree retrieval problem that combines keyword querying with skyline functionality on attributed graphs. The result of a skyline KTree query is independent of scoring functions. Hence, no matter which keywords are preferred, users can always find their favorite KTrees in a result. To enable efficient skyline KTree retrieval, we propose algorithm FilterRefine that first identifies candidate results and then uses them for search space pruning. Computing distances between keywords and vertices is expensive and dominates the computational cost of FilterRefine. Inspired by subspace skyline query techniques, we convert the skyline KTree retrieval problem into a multi-dimensional subspace skyline problem and propose algorithm MultiDiSkylineOpt. This algorithm is able to reuse skylines in subspaces and uses bounds on all dimensions to accelerate distance computation. Experimental results on real datasets show that a baseline algorithm cannot report results within a 500 second cut-off time, while the proposed algorithms are able to compute results in reasonable time. In particular, MultiDiSkylineOpt is able to efficiently retrieve skyline KTrees on large graphs with millions of nodes and hundreds of millions of edges.</p>
        <div style="display: flex;" class="gimgs">
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project2_1.png`" fit="cover" alt="" class="gimg1" :preview-src-list="['/academicpage/image/project2_1.png']"/>
          </div>
          <div class="image-container" data-text="Click to view">
            <el-image :src="`/academicpage/image/project2_2.png`" fit="cover" alt="" class="gimg2" :preview-src-list="['/academicpage/image/project2_2.png']"/>
          </div>
        </div>
      </div>
      <p style="display: flex; margin-top: 24px; height: 30px; line-height: 30px; color: #2F81FC; font-weight: 400; font-size: 14px;">
        <button class="toggle-button" @click="toggleGroup" >
            {{ showGroup ? 'FOLD' : 'If you want to view more projects, please click MORE' }}
            <img v-if="showGroup" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
            <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;">
        </button>
      </p>
    </div>
    <div class="achievement">
      <img src="/image/pic_red.png" alt="" class="aellipse">
      <p class="atitle">Achievements</p>
      <div class="aline1" />
      <div class="aline2" />
      <div class="achievements">
        <el-row>
          <el-col :span="2" :xs="0"/>
          <el-col :span="8" :xs="24">
            <div class="abuttons">
              <button class="abutton" :class="{'selecttab': activetab === 1}" @click="setActiveTab(1)">Research Awards</button>
              <button class="abutton" :class="{'selecttab': activetab === 2}" @click="setActiveTab(2)">Research Grants</button>
              <button class="abutton" :class="{'selecttab': activetab === 3}" @click="setActiveTab(3)">Research Publications</button>
              <button class="abutton" :class="{'selecttab': activetab === 4}" @click="setActiveTab(4)">Patents</button>
            </div>
            <div class="dblp">
              <a href="https://dblp.org/pid/81/6181.html" target="_blank" style="color: #2F81FC;">[DBLP]</a>&nbsp;
              <a href="https://scholar.google.com/citations?user=oRbQlsEAAAAJ&hl=en" target="_blank" style="color: #2F81FC;">[Google Scholar]</a>
            </div>
          </el-col>
          <el-col :span="12"  :xs="24">
            <div v-if="activetab === 1" class="atext">
              <p>2023年广东省计算机学会优秀论文二等奖，Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p>
              <p>2021年广东省计算机学会优秀论文二等奖，Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p>
            </div>
            <div v-if="activetab === 2" class="atext">
              <p>项目名称：面向超大图数据分析的多样本分布式计算方法与算法研究，经费来源：国家自然科学基金面上项目，起止时间：2024-01至2027-12。</p>
              <p>项目名称：位置相关的网络信息数据查询推荐模型与算法研究，经费来源：国家自然科学基金青年项目，起止时间：2016-01至2018-12。</p>
              <p>项目名称：多推理模式、多属性的图嵌入表示学习关键技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2023-01至2025-12。</p>
              <p>项目名称：时空RDF数据上的语义地点检索技术研究，经费来源：广东省基础与应用基础研究基金面上项目，起止时间：2019-10至2022-09。</p>
            </div>
            <div v-if="activetab === 3" class="atext">
              <p>Siyue Wu, Dingming Wu, Sinhong Cheuk, Tsz Nam Chan, Kezhong Lu: GREAT: Generalized Reservoir Sampling based Triangle Counting Estimation over Streaming Graphs. Proc. VLDB Endow. 18(7): 2031-2043 (2025)</p>
              <p>Tsz Nam Chan, Pak Lon Ip, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu, Christian S. Jensen: Large-Scale Spatiotemporal Kernel Density Visualization. ICDE 2025: 99-113</p>
              <p>Weike Tang, Dingming Wu, Tsz Nam Chan, Kezhong Lu: Spatially Compact Dense Block Mining in Spatial Tensors. KDD (1) 2025: 1349-1360</p>
              <p>Siyue Wu, Dingming Wu, Junyi Quan, Tsz Nam Chan, Kezhong Lu: Efficient and Accurate PageRank Approximation on Large Graphs. Proc. ACM Manag. Data 2(4): 196:1-196:26 (2024)</p>
              <p>Tsz Nam Chan, Rui Zang, Bojian Zhu, Leong Hou U, Dingming Wu, Jianliang Xu: LION: Fast and High-Resolution Network Kernel Density Visualization. Proc. VLDB Endow. 17(6): 1255-1268 (2024)</p>
              <p>Tsz Nam Chan, Bojian Zhu, Dingming Wu, Yun Peng, Leong Hou U: LARGE: A Length-Aggregation-based Grid Structure for Line Density Visualization. Proc. VLDB Endow. 17(13): 4585-4598 (2024)</p>
              <p>Dingming Wu, Zhaofen Zhang, Christian S. Jensen, Kezhong Lu: Efficient Skyline Keyword-Based Tree Retrieval on Attributed Graphs. IEEE Trans. Knowl. Data Eng. 36(11): 6056-6070 (2024)</p>
              <p>Dingming Wu, Erjia Xiao, Yi Zhu, Christian S. Jensen, Kezhong Lu: Efficient Retrieval of the Top-k Most Relevant Event-Partner Pairs. IEEE Trans. Knowl. Data Eng. 35(3): 2529-2543 (2023)</p>
              <p>Dingming Wu, Ilkcan Keles, Song Wu, Hao Zhou, Simonas Saltenis, Christian S. Jensen, Kezhong Lu: Density-Based Top-K Spatial Textual Clusters Retrieval. IEEE Trans. Knowl. Data Eng. 34(11): 5263-5277 (2022)</p>
              <p>Dingming Wu, Hao Zhou, Jieming Shi, Nikos Mamoulis: Top-k relevant semantic place retrieval on spatiotemporal RDF data. VLDB J. 29(4): 893-917 (2020)</p>
              <p>Dingming Wu, Jieming Shi, Nikos Mamoulis: Density-Based Place Clustering Using Geo-Social Network Data. IEEE Trans. Knowl. Data Eng. 30(5): 838-851 (2018)</p>
            </div>
            <div v-if="activetab === 4" class="atext">
              <p>发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，专利号：ZL 202410055975.8，授权公布日：2024.06.11</p>
              <p>发明名称：一种频繁子图挖掘方法和终端设备，发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，专利号：ZL 202310430972.3，授权公布日：2023.11.28</p>
              <p>发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，发明人：吴定明；周钰棋；陆克中；詹金颖，专利号：ZL 202111472336.4，授权公布日：2022.05.20</p>
              <p>发明名称：RDF数据中天际线位置节点查询方法、装置和设备，发明人：吴定明；张钊奋；陆克中，专利号：ZL 202210026117.1，授权公布日：2022.05.17</p>
              <p>发明名称：一种活动与同伴的检索方法及系统，发明人：吴定明；朱艺；黄哲学，专利号：ZL 201810294059.4，授权公布日：2021.08.06</p>
              <p>发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，发明人：吴定明；罗德新；黄哲学，专利号：ZL 201710821358.4，授权公布日：2020.12.04</p>
              <!-- <p>发明名称：基于深度学习的多模型推进式配电网故障识别方法及系统，<br>发明人：高翔；黄经研；邱泽鹏；李跃芹；谭武汉；郭铮宇；吴定明，<br>专利号：ZL 202410055975.8，<br>授权公布日：2024.06.11</p> -->
              <!-- <p>发明名称：一种频繁子图挖掘方法和终端设备，<br>发明人：张钊奋；吴定明；吴亿欣；陆克中；黄哲学，<br>专利号：ZL 202310430972.3，<br>授权公布日：2023.11.28</p> -->
              <!-- <p>发明名称：知识图谱嵌入模型训练方法、装置、电子设备及介质，<br>发明人：吴定明；周钰棋；陆克中；詹金颖，<br>专利号：ZL 202111472336.4，<br>授权公布日：2022.05.20</p> -->
              <!-- <p>发明名称：RDF数据中天际线位置节点查询方法、装置和设备，<br>发明人：吴定明；张钊奋；陆克中，<br>专利号：ZL 202210026117.1，<br>授权公布日：2022.05.17</p> -->
              <!-- <p>发明名称：一种活动与同伴的检索方法及系统，<br>发明人：吴定明；朱艺；黄哲学，<br>专利号：ZL 201810294059.4，<br>授权公布日：2021.08.06</p> -->
              <!-- <p>发明名称：基于分类树的最大多样频繁模式的挖掘方法及装置，<br>发明人：吴定明；罗德新；黄哲学，<br>专利号：ZL 201710821358.4，<br>授权公布日：2020.12.04</p> -->
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="ps">
      <div class="pstitle">
        <img src="/image/pic_green.png" alt="" class="pellipse">
        <p class="ptitle">Professional Services</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <table style="border-collapse:separate; border-spacing:0px 24px;">
        <tbody>
          <!-- <tr>
            <td class="tdtitle">Major Service Award</td>
            <td class="tdtext">
              <span>Outstanding Reviewer Award in IEEE International Conference on Data Engineering (ICDE) 2024</span>
            </td>
          </tr> -->
          <tr>
            <td class="tdtitle">Journal Referee</td>
            <td class="tdtext">
              <p>The International Journal on Very Large Data Bases (VLDBJ)</p>
              <p>IEEE Transactions on Knowledge and Data Engineering (TKDE)</p>
              <!-- <span v-if="showjr">111<br></span> -->
              <!-- <button class="showjrbutton" @click="showjrfun"> -->
                <!-- {{ showjr ? 'FOLD' : 'MORE'}} -->
                <!-- <img v-if="showjr" src="/image/icon_fold.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;"> -->
                <!-- <img v-else src="/image/icon_open.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 10px;"> -->
              <!-- </button> -->
            </td>
          </tr>
          <!-- <tr> -->
            <!-- <td class="tdtitle">Conference Program Organizer</td> -->
            <!-- <td class="tdtext"> -->
              <!-- <span>International Conference on Mobile Data Management (MDM) Year: 2021 to 2024 proceedings chair</span> -->
            <!-- </td> -->
          <!-- </tr> -->
          <tr>
            <td class="tdtitle">Conference Program Committee/Reviewer</td>
            <td class="tdtext">
              <p>Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD) 2026, 2025, 2024</p>
              <p>IEEE International Conference on Data Engineering (ICDE) 2026, 2025, 2022</p>
              <p>AAAI Conference on Artificial Intelligence 2024, 2022</p>
              <p>International Joint Conference on Artificial Intelligence (IJCAI) 2021</p>
            </td>
          </tr>
          <!-- <tr> -->
            <!-- <td class="tdtitle">Conference Program Session Chair</td> -->
            <!-- <td class="tdtext"> -->
              <!-- <span>International Conference on Very Large Data Bases (VLDB) Year: 2020, 2022</span><br> -->
              <!-- <span>IEEE International Conference on Data Engineering (ICDE) Year: 2021, 2024</span><br> -->
              <!-- <span>International Joint Conference on Web and Big Data (APWeb-WAIM) Year: 2021</span><br> -->
              <!-- <span>International Conference on Web Information Systems Engineering (WISE) Year: 2021</span> -->
            <!-- </td> -->
          <!-- </tr> -->
        </tbody>
        <colgroup>
          <col>
          <col>
        </colgroup>
      </table>
    </div>
    <div class="teaching">
      <div class="teachingtitle">
        <img src="/image/pic_purple.png" alt="" class="tellipse">
        <p class="ptitle">Teaching</p>
        <div class="pline1" />
        <div class="pline2" />
      </div>
      <div class="card">
        <div class="course">
          <p class="ctitle">Courses</p>
          <div class="ctext">
            <p>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p>
            <p>Data Structures (Fall 2024-2019)</p>
            <p>Big Data Processing and Analytics (Spring 2019)</p>
            <p>Introdution to Big Data (Fall 2018-2017)</p>
            <p>Information Retrieval (Spring 2018-2017)</p>
            <p>Search Engine Technology (Fall 2016)</p>
          </div>
          <button class="more1" style="display: flex;" @click="moreteaching(1)">
            MORE
            <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
          </button>
        </div>
        <div class="at">
          <p class="ctitle">Awards</p>
          <div class="ctext">
            <p>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p>
            <p>2023年广东省一流本科课程，算法设计与分析</p>
            <p>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p>
          </div>
          <button class="more2" style="display: flex;" @click="moreteaching(2)">
            MORE
            <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
          </button>
        </div>
        <div class="tutorials">
          <p class="ctitle">Students</p>
          <div class="ctext">
            <h1>在读学生</h1>
            <p>博士生：伍斯玥，熊子谞，林健，Anastasiia Garanina</p>
            <p>硕士生：刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申，韦旭南，张浩然</p>
            <br>
            <h1>毕业学生</h1>
            <p>全俊熠，腾讯，2025</p>
            <p>卓仙鸿，平安银行，2025</p>
            <p>黄经研，美的集团，2025</p>
            <p>唐伟科，腾讯，优秀毕业生，2025</p>
            <p>赖新颖，华为，2024</p>
            <p>吕华彬，九维数据技术有限公司，2024</p>
            <p>袁楚杰，字节跳动，2024</p>
            <p>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生，2024</p>
            <p>朱思潼，公务员（国家税务总局广州市税务局），2024</p>
            <p>李密，招银网络科技有限公司，2023</p>
            <p>杜国良，广州凯媒通讯技术有限公司，2023</p>
            <p>吴亿欣，中国人寿保险股份有限公司，2023</p>
            <p>周钰琪，公务员（深圳市社会保险基金管理局宝安分局），2023</p>
            <p>吴松，读博（Utrecht University, Netherlands），2022</p>
            <p>林俊杰，招银网络科技有限公司，2022</p>
            <p>陈萌，上海微创医疗机器人，2022</p>
            <p>詹金颖，华为，2022</p>
            <p>李昕宸，读博（深圳大学），2021</p>
            <p>侯灿，建信金融科技公司，2020</p>
            <p>周豪，华为，2020</p>
            <p>罗德新，腾讯，2019</p>
            <p>朱艺，字节跳动，优秀毕业生，2019</p>
          </div>
          <button class="more3" style="display: flex;" @click="moreteaching(3)">
            MORE
            <img src="/image/icon_open2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
          </button>
        </div>
      </div>
      <div class="book">
        <p class="booktitle">Books</p>
        <div class="booktext">
          <p>《Mastering the Academic Writing Mindset》，Springer Nature</p>
          <p>《算法设计与分析实践案例解析》，清华大学出版社</p>
          <p>《算法设计与分析》，清华大学出版社</p>
        </div>
      </div>
      <div id="overlay" class="overlay"></div>
      <div v-if="teachingcard === 1" class="coursebig">
        <p class="titlebig">Course</p>
        <div class="textbig">
          <p>Design and Analysis of Algorithms (Spring 2024-2019, Fall 2018-2016)</p>
          <p>Data Structures (Fall 2024-2019)</p>
          <p>Big Data Processing and Analytics (Spring 2019)</p>
          <p>Introdution to Big Data (Fall 2018-2017)</p>
          <p>Information Retrieval (Spring 2018-2017)</p>
          <p>Search Engine Technology (Fall 2016)</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div v-if="teachingcard === 2" class="coursebig">
        <p class="titlebig">Awards</p>
        <div class="textbig">
          <p>2024年第九届全国计算机类课程实验教学案例评选优秀案例，一等奖</p>
          <p>2023年广东省一流本科课程，算法设计与分析</p>
          <p>2021年深圳大学教育教学成果(高等教育类)，一等奖，产教融合理念下校企双主体协同培养计算机工程硕士的创新与实践</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
      <div v-if="teachingcard === 3" class="coursebig">
        <p class="titlebig">Students</p>
        <div class="textbig">
            <h1>在读学生</h1>
            <p>博士生：伍斯玥，熊子谞</p>
            <p>硕士生：全俊熠，卓仙鸿，黄经研，唐伟科，刘洋，吴浩钊，黄爽怡，王凯涛，熊国伟，李可欣，骆逸文，黄伊桦，廖明申，韦旭南</p>
            <br>
            <h1>毕业学生</h1>
            <p>赖新颖，华为，2024</p>
            <p>吕华彬，九维数据技术有限公司，2024</p>
            <p>袁楚杰，字节跳动，2024</p>
            <p>张钊奋，深圳杉岩数据技术有限公司，优秀毕业生，2024</p>
            <p>朱思潼，公务员（国家税务总局广州市税务局），2024</p>
            <p>李密，招银网络科技有限公司，2023</p>
            <p>杜国良，广州凯媒通讯技术有限公司，2023</p>
            <p>吴亿欣，中国人寿保险股份有限公司，2023</p>
            <p>周钰琪，公务员（深圳市社会保险基金管理局宝安分局），2023</p>
            <p>吴松，读博（Utrecht University, Netherlands），2022</p>
            <p>林俊杰，招银网络科技有限公司，2022</p>
            <p>陈萌，上海微创医疗机器人，2022</p>
            <p>詹金颖，华为，2022</p>
            <p>李昕宸，读博（深圳大学），2021</p>
            <p>侯灿，建信金融科技公司，2020</p>
            <p>周豪，华为，2020</p>
            <p>罗德新，腾讯，2019</p>
            <p>朱艺，字节跳动，优秀毕业生，2019</p>
        </div>
        <button class="fold" style="display: flex;" @click="foldteaching">
          FOLD
          <img src="/image/icon_fold2.png" alt="" style="width: 10px; height: 10px; margin-left: 6px; margin-top: 11px;">
        </button>
      </div>
    </div>
    <!-- <div class="end">
      <p class="endtitle">How to be Productive in Research?</p>
      <p class="endtext">If you want to be productive in research, you need to read this document (by Prof. Dimitris Papadias in HKUST), read this Zhihu blog (written in Chinese), and watch this video (by Prof. Baochun Li in the University of Toronto).</p>
    </div> -->
    <p class="welcome">Welcome to the Data Management & Intelligence Group in Shenzhen University (SZU).</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'assets/fonts/fonts.css';

const showGroup = ref(false);
// const showjr = ref(false);
const activetab = ref(1);
const teachingcard = ref(0);

function toggleGroup() {
  showGroup.value = !showGroup.value;
}

// function showjrfun() {
//   showjr.value = !showjr.value;
// }

const setActiveTab = (id: number) => {
  activetab.value = id;
};

const moreteaching = (id: number) => {
  teachingcard.value = id;
  document.body.style.overflow = 'hidden';
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = 'block';
  }
};

const foldteaching = () => {
  teachingcard.value = 0;
  document.body.style.overflow = 'auto';
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = 'none';
  }
};
</script>

<style scoped>
:global(body) {
  font-family: Inter, Inter;
  color: #000000;
  overflow-x: hidden;
}
.bg {
  width: 100%;
  /* height: 6558px; */
  background: #f1f7fa;
  border-radius: 0px 0px 0px 0px;
}
.top {
  position: relative;
  width: 100%;
  height: 460px;
  background: linear-gradient( 144deg, rgba(142,203,249,0.66) 0%, rgba(186,225,255,0.3) 80%, rgba(222,241,255,0) 100%);
  border-radius: 0px 0px 0px 0px;
  filter: blur(0px);
}
.topcontainer {
  position: relative;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}
.tname {
  position: absolute;
  top: 104px;
  height: 38px;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
}
.tintro {
  position: absolute;
  top: 170px;
  height: 59px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}
.tlocation {
  position: relative;
  top: 291px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.icon_address {
  position: absolute;
  width: 30px;
  height: 30px;
}
.locationtext {
  position: absolute;
  width: 300px;
  left: 46px;
}
.temail {
  position: relative;
  top: 309px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.icon_email {
  position: absolute;
  width: 30px;
  height: 30px;
}
.emailtext {
  position: absolute;
  width: 300px;
  left: 46px;
}
.teacherimg {
  position: absolute;
  top: 89px;
  right: 0;
  width: 276px;
  height: 276px;
  object-fit: cover;
  mask-image: radial-gradient(circle, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 71%);
}
.text {
  max-width: 1152px;
  /* height: 179px; */
  margin-top: 64px;
  margin-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.research {
  position: relative;
  max-width: 1152px;
  /* height: 1831px; */
  margin-left: auto;
  margin-right: auto;
}
.rtitle {
  position: absolute;
  top: 0;
  left: 0;
  width: 218px;
  height: 50px;
}
.rellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%); */
  /* border-radius: 50%; */
}
.title {
  position: absolute;
  top: 12px;
  left: 32px;
  height: 38px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
}
.rline1 {
  position: absolute;
  top: 42px;
  right: 0;
  width: 32px;
  border: 1px solid #000000;
}
.rline2 {
  position: absolute;
  top: 50px;
  right: 0;
  width: 118px;
  border: 1px solid #000000;
}
.ri {
  position: absolute;
  margin: 90px 0 0 0;
  height: 28px;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
}
.rifield {
  position: absolute;
  margin-top: 162px;
  width: 100%;
  height: 119px;
}
/* .rectangle1 {
  position: absolute;
  margin: 10px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
}
.rectangle2 {
  position: absolute;
  margin: 40px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
}
.rectangle3 {
  position: absolute;
  margin: 70px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
}
.rectangle4 {
  position: absolute;
  margin: 100px 0 0 0;
  width: 10px;
  height: 10px;
  background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #91C7F5 100%);
  transform: rotate(45deg);
} */
.ritext {
  position: absolute;
  max-width: 100%;
  /* margin: 0 0 0 32px; */
  /* height: 119px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.Long-Term-Goal {
  position: absolute;
  margin: 285px 0 0 0;
  height: 28px;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
}
.ltgtext {
  position: absolute;
  margin: 337px 0 0 0;
  height: 89px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.Selected-projects {
  position: absolute;
  margin: 285px 0 0 0;
  height: 24px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
}
.sptext {
  position: absolute;
  margin: 498px 0 0 0;
  height: 59px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.group {
  position: relative;
  top: 337px;
  width: 100%;
  /* height: 586px; */
}
.gtitle {
  /* height: 29px; */
  font-weight: 600;
  font-size: 16px;
  color: #2F81FC;
  line-height: 30px;
}
.gintro {
  margin: 24px 0 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.image-container::before {
  position: absolute;
  margin-top: 24px;
  content: attr(data-text); 
  background: rgba(0, 0, 0, 0.5);
  width: 373px;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  opacity: 0; 
  transition: opacity 0.3s ease;
  border-radius: 16px 16px 16px 16px;
  z-index: 999;
  pointer-events: none;
}

.image-container:hover::before {
  opacity: 1;
}
.gimg1 {
  margin-top: 24px;
  left: 0;
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
}
.gimg2 {
  margin-top: 24px;
  margin-left: 2%;
  /* transform: translateX(-50%); */
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
}
.gimg3 {
  margin-top: 24px;
  margin-left: 2%;
  width: 373px;
  height: 270px;
  border-radius: 16px 16px 16px 16px;
}
.group2 {
  position: relative;
  margin: 361px 0 0 0;
  width: 100%;
  /* height: 586px; */
}
.group3 {
  position: relative;
  margin: 24px 0 0 0;
  width: 100%;
  /* height: 586px; */
}
.toggle-button {
  /* position: relative; */
  display: flex;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #2F81FC;
}
.achievement {
  position: relative;
  margin-top: 80px;
  max-width: 1152px;
  height: 855px;
  margin-left: auto;
  margin-right: auto;
}
.aellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #F59191 100%); */
  /* border-radius: 50%; */
}
.atitle {
  position: absolute;
  top: 12px;
  left: 32px;
  height: 38px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
}
.aline1 {
  position: absolute;
  top: 42px;
  left: 275px;
  width: 32px;
  border: 1px solid #000000;
}
.aline2 {
  position: absolute;
  top: 50px;
  left: 189px;
  width: 118px;
  border: 1px solid #000000;
}
.achievements {
  position: absolute;
  top: 91px;
  width: 100%;
  height: 764px;
  background: rgba(196,196,196,0);
  border-radius: 16px 16px 16px 16px;
  border: 4px solid #000000;
}
.abuttons {
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-top: 80px;
}
.abutton {
  margin-left: 0;
  width: 271px;
  height: 64px;
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  border-radius: 32px 32px 32px 32px;
  border: 0;
}
.abutton:hover {
  color: #000000;
  background: #FFFFFF;
  border-radius: 32px 32px 32px 32px;
  /* border: 4px solid rgba(0,0,0,0); */
  cursor: pointer;
}
.selecttab {
  color: #000000 !important;
  background: #FFFFFF !important;
  border-radius: 32px 32px 32px 32px;
  border: 4px solid #000000 !important;
}
.dblp {
  width: 271px;
  margin-top: 119px;
  height: 29px;
  font-weight: 600;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
  text-align: center;
}
.atext {
  margin-top: 80px;
  height: 492px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) rgba(0,0,0,0);
  
}
.atext p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
.atext p {
  padding-left: 1em;
}
.ps {
  position: relative;
  margin-top: 80px;
  max-width: 1152px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
}
.pstitle {
  position: relative;
  margin-top: 80px;
  width: 422px;
  height: 100px;
}
.pellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #6FBD79 100%); */
  /* border-radius: 50%; */
}
.ptitle {
  position: absolute;
  top: 12px;
  left: 32px;
  height: 38px;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
}
.pline1 {
  position: absolute;
  top: 42px;
  right: 0;
  width: 32px;
  border: 1px solid #000000;
}
.pline2 {
  position: absolute;
  top: 50px;
  right: 0;
  width: 118px;
  border: 1px solid #000000;
}
.pscontainer {
  position: relative;
  margin-top: 80px;
  width: 100%;
  /* height: 100px; */
}
tr {
  margin-bottom: 64px;
}
td p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
td p {
  padding-left: 1em;
}
.showjrbutton {
  display: flex;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.tdtitle {
  vertical-align: top;
  width: 42%;
  height: 30px;
  font-weight: 600;
  font-size: 16px;
  color: #2F81FC;
  line-height: 30px;
}
.tdtext {
  vertical-align: top;
  height: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 35px;
}
.teaching {
  position: relative;
  margin-top: 40px;
  max-width: 1152px;
  height: 845px;
  margin-left: auto;
  margin-right: auto;
}
.teachingtitle {
  position: relative;
  width: 227px;
  height: 51px;
}
.tellipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  /* background: linear-gradient( 331deg, rgba(255,255,255,0) 0%, #B573FF 100%); */
  /* border-radius: 50%; */
}
.card {
  position: relative;
  width: 100%;
  /* height: 594px; */
}
.course {
  position: absolute;
  width: 32%;
  margin-top: 40px;
  left: 0;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.ctitle {
  margin-top: 40px;
  margin-left: 40px;
  height: 36px;
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.ctext {
  margin-top: 40px;
  margin-inline: 40px;
  height: 356px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  overflow: hidden;
}
.ctext h1 {
  font-weight: bold;
  /* font-size: 20px; */
  /* line-height: 28px; */
}
.ctext p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
.ctext p {
  padding-left: 1em;
}
.at {
  position: absolute;
  width: 32%;
  margin-top: 40px;
  left: 34%;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.tutorials {
  position: absolute;
  width: 32%;
  margin-top: 40px;
  right: 0;
  height: 554px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.book {
  /* position: absolute; */
  width: 100%;
  margin-top: 616px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
}
.booktitle {
  padding-top: 40px;
  margin-left: 40px;
  /* height: 36px; */
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.booktext {
  padding-top: 40px;
  padding-bottom: 40px;
  margin-inline: 40px;
  /* height: 356px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.booktext p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
.booktext p {
  padding-left: 1em;
}
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.coursebig {
  position: fixed;
  width: 83%;
  height: 80%;
  top: 10%;
  left: 8.5%;
  /* transform: translate(-50%, -50%); */
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  z-index: 1000;
  /* overflow-x: scroll; */
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.2) rgba(0,0,0,0);
}
.titlebig {
  padding-top: 40px;
  margin-left: 40px;
  /* height: 36px; */
  font-family: Montserrat Alternates, Montserrat Alternates;
  font-weight: bold;
  font-size: 36px;
  color: #2F81FC;
  line-height: 36px;
  text-shadow: 5px -3px 0px rgba(47,129,252,0.1);
}
.textbig {
  margin-top: 40px;
  margin-inline: 40px;
  height: 70%;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  overflow-x: scroll;
}
.textbig h1 {
  font-weight: bold;
  /* font-size: 20px; */
  /* line-height: 28px; */
}
.textbig p::before {
  content: '•\00a0\00a0';
  margin-left: -1.1em;
  vertical-align: 0.1em;
}
.textbig p {
  padding-left: 1em;
}
.more1 {
  margin-top: 28px;
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
  visibility: hidden;
}
.more2 {
  margin-top: 28px;
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
  visibility: hidden;
}
.more3 {
  margin-top: 28px;
  margin-left: 75%;
  height: 30px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
.fold {
  position: fixed;
  bottom: 10%;
  right: 11%;
  padding-bottom: 24px;
  font-weight: normal;
  font-size: 14px;
  color: #2F81FC;
  line-height: 30px;
}
/* .end {
  position: relative;
  margin-top: 40px;
  max-width: 1152px;
  height: 299px;
  background: rgba(196,196,196,0);
  border-radius: 16px 16px 16px 16px;
  border: 4px solid #000000;
  margin-left: auto;
  margin-right: auto;
}
.endtitle {
  margin-top: 80px;
  text-align: center;
  height: 32px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-decoration-line: underline;
}
.endtext {
  margin-top: 40px;
  margin-inline: 72px;
  height: 59px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
} */
.welcome {
  margin-top: 80px;
  text-align: center;
  height: 15px;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0,0,0,0.6);
  line-height: 14px;
}
@media (max-width: 480px) {
  .top {
    height: 525px;
  }
  .topcontainer {
    max-width: 100%;
    height: 525px;
    text-align: center;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
  }
  .teacherimg {
    top: 32px;
    right: calc((100% - 120px)/2);
    width: 120px;
    height: 120px;
  }
  .tname {
    top: 168px;
    width: 100%;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
  .tintro {
    top: 218px;
    left: calc((100% - 257px)/2);
    width: 257px;
    height: 119px;
    font-size: 14px;
    line-height: 30px;
  }
  .tlocation {
    top: 361px;
    left: calc((100% - 257px)/2);
    width: 257px;
    height: 62px;
  }
  .icon_address {
    left: calc((100% - 24px)/2);
    width: 24px;
    height: 24px;
  }
  .locationtext {
    top: 32px;
    left: 0;
    width: 257px;
    font-size: 14px;
    line-height: 30px;
  }
  .temail {
    margin-top: 58px;
    left: calc((100% - 257px)/2);
    width: 257px;
    height: 62px;
  }
  .icon_email {
    left: calc((100% - 24px)/2);
    width: 24px;
    height: 24px;
  }
  .emailtext {
    top: 32px;
    left: 0;
    width: 257px;
    font-size: 14px;
    line-height: 30px;
  }
  .text {
    max-width: 304px;
    margin-top: 24px;
    /* text-align: center; */
  }
  .research {
    max-width: 304px;
    /* height: 1831px; */
  }
  .rtitle {
    width: 137px;
    height: 29px;
    margin-left: calc((100% - 137px)/2);
  }
  .rellipse {
    width: 20px;
    height: 20px;
  }
  .title {
    top: 3px;
    left: 13px;
    width: 137px;
    height: 29px;
    font-size: 20px;
    line-height: 29px;
  }
  .rline1 {
    top: 23px;
    width: 17px;
  }
  .rline2 {
    top: 29px;
    width: 72px;
  }
  .ri {
    margin-top: 53px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
  }
  .rifield {
    margin-top: 103px;
    height: 300px;
  }
  .rectangle1 {
    margin-top: 10px;
  }
  .rectangle2 {
    margin-top: 40px;
  }
  .rectangle3 {
    margin-top: 220px;
  }
  .rectangle4 {
    margin-top: 250px;
  }
  .ritext {
    height: 300px;
  }
  .Long-Term-Goal {
    margin-top: 427px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
  }
  .ltgtext {
    margin-top: 477px;
    height: 359px;
  }
  .Selected-projects {
    margin-top: 330px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
  }
  .group {
    top: 385px;
    /* height: 586px; */
  }
  .gtitle {
    font-size: 14px;
    line-height: 30px;
  }
  .gintro {
    margin-top: 8px;
    font-size: 14px;
    line-height: 30px;
  }
  .group2 {
    margin-top: 400px;
    /* height: 586px; */
  }
  .gimgs {
    overflow-x: scroll;
  }
  .gimg1 {
    width: 304px;
    height: 220px;
  }
  .gimg2 {
    margin-left: 5px;
    width: 304px;
    height: 220px;
  }
  .gimg3 {
    margin-left: 5px;
    width: 304px;
    height: 220px;
  }
  .image-container::before {
    display: none;
  }
  .toggle-button {
    width: 228px;
    height: 60px;
    margin-left: calc((100% - 228px)/2);
    font-size: 14px;
    line-height: 30px;
  }
  .achievement {
    max-width: 304px;
    height: 1100px;
  }
  .aellipse {
    width: 20px;
    height: 20px;
    margin-left: calc((100% - 185px)/2);
  }
  .atitle {
    width: 137px;
    height: 29px;
    top: 3px;
    left: calc((100% - 185px) / 2 + 13px);
    font-size: 20px;
    line-height: 26px;
  }
  .aline1 {
    top: 23px;
    left: calc((100% - 185px) / 2 + 168px);
    width: 17px;
  }
  .aline2 {
    top: 29px;
    left: calc((100% - 185px) / 2 + 113px);
    width: 72px;
  }
  .achievements {
    top: 71px;
    width: 100%;
    height: 964px;
  }
  .abuttons {
    margin-top: 40px;
    gap: 24px;
  }
  .abutton {
    width: 240px;
    height: 60px;
    margin-left: calc((100% - 240px)/2);
    font-size: 16px;
    line-height: 32px;
  }
  .dblp {
    width: 176px;
    margin-top: 24px;
    margin-left: calc((100% - 176px)/2);
    height: 29px;
    font-size: 14px;
    line-height: 30px;
  }
  .atext {
    width: 256px;
    margin-top: 40px;
    margin-left: calc((100% - 256px)/2);
    height: 480px;
  }
  .ps {
    margin-top: 40px;
    max-width: 304px;
  }
  .pstitle {
    margin-top: 40px;
    width: 255px;
    height: 29px;
    margin-left: calc((100% - 255px)/2);
  }
  .pellipse {
    width: 20px;
    height: 20px;
  }
  .ptitle {
    width: 229px;
    height: 26px;
    top: 3px;
    left: 13px;
    font-size: 20px;
    line-height: 26px;
  }
  .pline1 {
    top: 23px;
    right: 0;
    width: 17px;
  }
  .pline2 {
    top: 29px;
    right: 0;
    width: 72px;
  }
  td {
    display: block;
  }
  .tdtitle {
    width: 100%;
    font-size: 14px;
    line-height: 30px;
  }
  .tdtext {
    height: auto;
    font-size: 14px;
    line-height: 30px;
  }
  .teaching {
    margin-top: 40px;
    max-width: 304px;
    height: 2050px;
  }
  .teachingtitle {
    width: 135px;
    height: 42px;
    margin-left: calc((100% - 135px)/2);
  }
  .tellipse {
    width: 20px;
    height: 20px;
  }
  .course {
    position: relative;
    width: 304px;
    max-height: 505px;
    margin-top: 32px;
  }
  .at {
    position: relative;
    left: 0;
    width: 304px;
    max-height: 505px;
    margin-top: 32px;
  }
  .tutorials {
    position: relative;
    left: 0;
    width: 304px;
    max-height: 505px;
    margin-top: 32px;
  }
  .ctitle {
    position: relative;
    margin-top: 0;
    top: 32px;
    width: 100%;
    margin-left: 0;
    height: 36px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  .more1 {
    visibility: visible;
  }
  .book {
    /* position: relative; */
    width: 304px;
    margin-top: 16px;
    height: 370px;
  }
  .coursebig {
    position: fixed;
    width: 304px;
    /* height: 505px; */
    top: 32px;
    left: calc((100% - 304px)/2);
    /* overflow-x: none; */
  }
  .titlebig {
    margin-left: 0;
    width: 100%;
    height: 36px;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  .textbig {
    margin-top: 54px;
    padding-top: 0;
    margin-inline: 24px;
    height: 75%;
    font-size: 14px;
    line-height: 30px;
    overflow-x: scroll;
  }
  .fold {
    bottom: 17%;
    right: 23%;
    padding-bottom: 24px;
    font-size: 14px;
    line-height: 30px;
  }
  .welcome {
    margin-top: 40px;
    margin-left: calc((100% - 298px)/2);
    width: 298px;
    height: 26px;
    font-size: 10px;
    /* line-height: 26px; */
  }
}
</style>