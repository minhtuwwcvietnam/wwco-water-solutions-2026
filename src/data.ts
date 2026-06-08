// Static technical data and copy database for WWCo Water Solutions (Vietnamese & English)

export interface NavbarDict {
  home: string;
  solutions: string;
  projects: string;
  about: string;
  process: string;
  blog: string;
  contact: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  ctaConsult: string;
  ctaExplore: string;
  stats: { value: string; label: string }[];
}

export interface SolutionsConfig {
  title: string;
  subtitle: string;
  clickDetail: string;
  viewSpecs: string;
  benefitsTitle: string;
  diagramTitle: string;
}

export interface ProjectsConfig {
  title: string;
  subtitle: string;
  filterAll: string;
  filterHot: string;
  filterFiltration: string;
  filterHeating: string;
  filterAllInOne: string;
  projectSpecs: string;
  projectHighlights: string;
  viewProjectDetail: string;
}

export interface AboutConfig {
  title: string;
  subtitle: string;
  introTitle: string;
  intro: string;
  quote: string;
  commitmentsTitle: string;
  commitmentsDesc: string;
  commitments: { title: string; desc: string }[];
  principlesTitle: string;
  principlesDesc: string;
  principles: { title: string; desc: string }[];
}

export interface ProcessConfig {
  title: string;
  subtitle: string;
  stepTitle: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formLocation: string;
  formProjectSize: string;
  formInterest: string;
  formInterestHot: string;
  formInterestFilter: string;
  formInterestHeat: string;
  formSourceWater: string;
  formSourceTap: string;
  formSourceWell: string;
  formMessage: string;
  btnSubmit: string;
  submitSuccess: string;
  companyInfo: string;
  address: string;
  hotline: string;
  emailLabel: string;
  workingHours: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  description: string;
  readMore: string;
  viewMore: string;
  filterAll: string;
  filterHot: string;
  filterFilter: string;
  filterHeat: string;
  filterExp: string;
  prev: string;
  next: string;
  backToHome: string;
  noArticles: string;
}

export interface LanguageDict {
  brandName: string;
  brandFullName: string;
  brandSubtitle: string;
  navbar: NavbarDict;
  hero: HeroConfig;
  solutions: SolutionsConfig;
  projects: ProjectsConfig;
  about: AboutConfig;
  process: ProcessConfig;
  contact: ContactConfig;
  blog: BlogConfig;
}

export interface GlobalTranslations {
  vi: LanguageDict;
  en: LanguageDict;
}

export interface Solution {
  id: "hotwater" | "filtration" | "heating";
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  badge: string;
  benefitsTitle: string;
  benefits: string[];
  specsTitle: string;
  specs: { label: string; value: string }[];
  image: string;
  imageLabel: string;
  imageDesc: string;
  diagramTitle: string;
  diagramSteps: { title: string; desc: string }[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: string; // 'hotwater' | 'filtration' | 'heating' | 'all-in-one'
  image: string;
  images?: string[];
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  badge?: string;
  detail?: string[];
  icon?: string;
  image?: string;
  imageAlt?: string;
}

export interface Article {
  id: string;
  category: string; // 'hotwater' | 'filtration' | 'heating' | 'experience'
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  content: string[];
}

export const translations: GlobalTranslations = {vi:{brandName:"WWCo",brandFullName:"Water Wise Co.",brandSubtitle:"Hệ Thống Nước Tiêu Chuẩn Đức",navbar:{home:"Trang chủ",solutions:"Giải pháp",projects:"Dự án",about:"Về chúng tôi",process:"Quy trình",blog:"Kiến thức & tư vấn",contact:"Tư vấn & Báo giá"},hero:{title:`GIẢI PHÁP TỔNG THỂ VỀ NƯỚC\nCHO KHÔNG GIAN SỐNG CAO CẤP`,subtitle:"WWCo thiết kế và triển khai hệ thống nước nóng trung tâm, lọc nước trung tâm và sưởi sàn nước nóng cho biệt thự — với trọng tâm là vận hành ổn định, an toàn và bền vững.",ctaConsult:"Nhận Tư Vấn Miễn Phí",ctaExplore:"Khám Phá Giải Pháp",stats:[{value:"150+",label:"Biệt thự & Resort bàn giao"},{value:"100%",label:"Ống & thiết bị nhập khẩu Châu Âu"},{value:"5 Năm",label:"Bảo hành thiết bị chính hãng"},{value:"24/7",label:"Giám sát & xử lý sự cố từ xa"}]},solutions:{title:"GIẢI PHÁP HỆ NƯỚC TRUNG TÂM CHO BIỆT THỰ",subtitle:"WWCo thiết kế và triển khai các hệ thống nước trung tâm theo nhu cầu sử dụng thực tế, điều kiện kỹ thuật của công trình và yêu cầu vận hành lâu dài.",clickDetail:"Xem chi tiết thông số & quy trình thiết kế",viewSpecs:"Thông số kỹ thuật tiêu chuẩn",benefitsTitle:"Lợi ích vượt trội",diagramTitle:"Sơ đồ nguyên lý hoạt động"},projects:{title:"Dự Án Đã Thực Hiện",subtitle:"Chiêm ngưỡng những công trình kiến trúc cao cấp đã được WWCo thiết kế, lắp đặt toàn bộ hệ lọc nước, nước nóng trung tâm và sưởi sàn.",filterAll:"Tất Cả",filterHot:"Nước Nóng Trung Tâm",filterFiltration:"Lọc Nước Trung Tâm",filterHeating:"Sưởi Sàn Nước Nóng",filterAllInOne:"Giải Pháp Toàn Diện",projectSpecs:"Thông tin kỹ thuật dự án",projectHighlights:"Các module lắp đặt",viewProjectDetail:"Chi tiết thiết kế"},about:{title:"WWCo – đơn vị chuyên sâu về hệ nước trung tâm cho biệt thự",subtitle:"Chúng tôi tư vấn, thiết kế và triển khai các hệ thống nước nóng trung tâm, lọc nước trung tâm và sưởi sàn nước nóng theo cách đồng bộ, ổn định và phù hợp với thực tế công trình.",introTitle:"Bắt đầu từ sự ổn định của hệ thống",intro:`WWCo được xây dựng với định hướng tập trung vào các hệ nước trung tâm cho biệt thự và công trình cao cấp. Chúng tôi không tiếp cận công trình bằng việc chào bán từng thiết bị riêng lẻ, mà bắt đầu từ nhu cầu sử dụng, điều kiện kỹ thuật và khả năng vận hành lâu dài của toàn bộ hệ thống.\n\nMỗi công trình được WWCo khảo sát, thiết kế nguyên lý, phối hợp MEP, hướng dẫn thi công ống chờ, lắp đặt và theo dõi vận hành sau bàn giao. Mục tiêu là giúp hệ thống hoạt động ổn định, dễ sử dụng, dễ bảo trì và hạn chế rủi ro phát sinh sau khi công trình hoàn thiện.`,quote:"“Một hệ nước tốt không chỉ nằm ở thiết bị tốt, mà nằm ở cách thiết kế, phối hợp và vận hành đúng ngay từ đầu.”",commitmentsTitle:"CAM KẾT TRONG CÁCH LÀM VIỆC CỦA WWCo",commitmentsDesc:"Mỗi cam kết đều gắn với một bước cụ thể trong quá trình khảo sát, thiết kế, thi công và vận hành hệ thống.",commitments:[{title:"Thiết kế có cơ sở",desc:"Mỗi phương án được xây dựng từ khảo sát hiện trạng, chất lượng nước đầu vào, nhu cầu sử dụng thực tế và điều kiện kỹ thuật của công trình."},{title:"Vật tư đồng bộ",desc:"Thiết bị chính, đường ống, van, bơm, tủ điện và phụ kiện được lựa chọn theo cùng một phương án kỹ thuật, hạn chế lắp ghép rời rạc."},{title:"Thi công đúng điều kiện công trình",desc:"WWCo phối hợp với đội MEP và đơn vị thi công để kiểm soát vị trí thiết bị, tuyến ống chờ, điện cấp nguồn, thoát nước và không gian bảo trì."},{title:"Đồng hành sau bàn giao",desc:"Hệ thống được nghiệm thu, hướng dẫn sử dụng và thiết lập lịch bảo trì định kỳ để duy trì khả năng vận hành ổn định trong quá trình sử dụng lâu dài."}],principlesTitle:"NGUYÊN TẮC KỸ THUẬT TRONG TỪNG HỆ THỐNG",principlesDesc:"WWCo ưu tiên các chi tiết ảnh hưởng trực tiếp đến độ ổn định, tuổi thọ và khả năng bảo trì của hệ nước trung tâm.",principles:[{title:"Đường ống & phụ kiện",desc:"Lựa chọn vật tư phù hợp với áp lực, nhiệt độ và điều kiện vận hành của từng hệ thống nước nóng, nước lạnh, nước hồi và nước lọc."},{title:"Thiết bị & cụm điều khiển",desc:"Heat Pump, bồn tích nhiệt, hệ lọc, bơm, van và tủ điện được bố trí theo nguyên lý vận hành rõ ràng, thuận tiện kiểm tra và bảo trì."},{title:"Vận hành & bảo trì",desc:"Hệ thống được thiết kế để dễ theo dõi, dễ vệ sinh, dễ xả rửa và có phương án bảo trì định kỳ sau khi bàn giao."}]},process:{title:"QUY TRÌNH TRIỂN KHAI HỆ NƯỚC TRUNG TÂM",subtitle:"WWCo tiếp cận công trình từ khảo sát, kiểm tra chất lượng nước, thiết kế nguyên lý đến triển khai và vận hành, nhằm đảm bảo hệ thống hoạt động ổn định sau khi bàn giao.",stepTitle:"Bước"},contact:{title:"Yêu Cầu Khảo Sát & Tư Vấn Thiết Kế",subtitle:"Vui lòng cung cấp sơ bộ nhu cầu của bạn. Sau 4 giờ làm việc, chuyên gia WWCo sẽ phản hồi bản định hướng giải pháp tối ưu và hẹn lịch khảo sát thực địa tận nơi.",formName:"Họ và tên khách hàng",formPhone:"Số điện thoại liên hệ",formEmail:"Email (Nhận bản vẽ đề xuất)",formLocation:"Địa điểm công trình (Tỉnh/Thành)",formProjectSize:"Quy mô công trình (m² sàn)",formInterest:"Giải pháp quan tâm (Chọn nhiều mục)",formInterestHot:"Nước nóng trung tâm Heatpump",formInterestFilter:"Lọc nước trung tâm chuyên sâu",formInterestHeat:"Sưởi sàn nước nóng ấm áp",formSourceWater:"Nguồn nước đầu vào hiện tại",formSourceTap:"Nước máy đô thị",formSourceWell:"Nước giếng khoan / Nước khác",formMessage:"Nhu cầu đặc biệt hoặc lưu ý (số phòng tắm, số người sử dụng...)",btnSubmit:"Gửi Yêu Cầu Thiết Kế & Nhận Bản Đề Xuất",submitSuccess:"Yêu cầu của bạn đã được tiếp nhận thành công! Chuyên viên thiết kế hệ thống của WWCo sẽ liên hệ lại qua điện thoại và gửi email sơ đồ phân tích giải pháp sau tối đa 4 tiếng làm việc.",companyInfo:"Văn phòng Đại Diện Water Wise",address:"Số 7 lô 4, Khu báo Nhân Dân, P. Xuân Phương, Hà Nội",hotline:"0913 212 295",emailLabel:"Email kết nối: waterwisecentralvn@gmail.com",workingHours:"Giờ làm việc: Thứ 2 - Thứ 7 (8:00 - 18:00)"},blog:{title:"Kiến thức & tư vấn",subtitle:"Hiểu đúng để thiết kế hệ nước trung tâm hiệu quả hơn",description:"Tổng hợp các bài viết giúp chủ đầu tư, kiến trúc sư và đội MEP hiểu rõ hơn về nước nóng trung tâm, lọc nước trung tâm, sưởi sàn nước nóng và kinh nghiệm triển khai thực tế.",readMore:"Đọc bài viết →",viewMore:"Xem thêm bài viết →",filterAll:"Tất cả",filterHot:"Nước nóng trung tâm",filterFilter:"Lọc nước trung tâm",filterHeat:"Sưởi sàn nước nóng",filterExp:"Kinh nghiệm triển khai",prev:"← Trước",next:"Sau →",backToHome:"Quay lại trang chủ",noArticles:"Không tìm thấy bài viết nào trong danh mục này."}},en:{brandName:"WWCo",brandFullName:"Water Wise Co.",brandSubtitle:"German Standard Water Engineering",navbar:{home:"Home",solutions:"Solutions",projects:"Projects",about:"About us",process:"Process",blog:"Insights",contact:"Consultation & Quotes"},hero:{title:`WATER SOLUTIONS FOR
MODERN VILLAS`,subtitle:"WWCo designs and deploys central hot water, central water filtration, and hydronic radiant underfloor heating systems for villas — focusing on stable, safe, and sustainable operation.",ctaConsult:"Get Free Consultation",ctaExplore:"Explore Our Systems",stats:[{value:"150+",label:"Villas & Resorts Delivered"},{value:"100%",label:"European Imported Pipes/Equipment"},{value:"5 Years",label:"Genuine Equipment Warranty"},{value:"24/7",label:"Remote Monitoring & Response"}]},solutions:{title:"CENTRAL WATER SOLUTIONS FOR VILLAS",subtitle:"WWCo designs and implements central water systems tailored to actual demand, site technical conditions, and long-term operational criteria.",clickDetail:"View technical parameters & design process",viewSpecs:"Standard Technical Specifications",benefitsTitle:"Key Advantages",diagramTitle:"Hydraulic Operation Principle"},projects:{title:"Featured Masterpieces",subtitle:"Take a closer look at premium residences where WWCo successfully designed, integrated, and commissioned our water systems.",filterAll:"All Projects",filterHot:"Central Hot Water",filterFiltration:"Central Filtration",filterHeating:"Underfloor Heating",filterAllInOne:"All-in-One Integration",projectSpecs:"Project Technical Specs",projectHighlights:"Installed Modules",viewProjectDetail:"View Design Details"},about:{title:"WWCo – Specializing in Central Water Systems for Villas",subtitle:"We consult, design, and deploy central hot water, central water filtration, and hydronic radiant underfloor heating systems in a synchronized, stable, and site-compatible manner.",introTitle:"Starting from system stability",intro:`WWCo is built with a deep focus on central water systems for villas and luxury estates. We do not approach projects by simply selling individual products; instead, we begin with usage demands, site-technical conditions, and the long-term operational viability of the entire setup.

For every project, WWCo conducts surveys, designs hydraulic schematics, coordinates MEP, guides sleeve installation, carries out mounting, and monitors performance post-handover. Our target is to ensure stable, user-friendly, and maintenance-ready systems while minimizing post-finish structural failures.`,quote:"“A great water system is not just about having great hardware; it lies in proper design, seamless coordination, and precise execution from the very beginning.”",commitmentsTitle:"WWCo OPERATIONAL COMMITMENTS",commitmentsDesc:"Each commitment is directly tied to a specific phase in our survey, design, construction, and system operation.",commitments:[{title:"Evidence-based design",desc:"Every solution is developed derived from our site surveys, raw water analysis, actual usage requirements, and on-site engineering constraints."},{title:"Synchronized materials",desc:"Core units, pipelines, valves, pumps, panels, and utilities are curated under a single unified engineering plan, avoiding fragmented, disconnected assembly."},{title:"Site-compatible construction",desc:"WWCo aligns closely with MEP teams and builders to control hardware placement, piping sleeves, electric drops, drainage ports, and servicing space."},{title:"Post-handover partnership",desc:"All systems undergo formal commissioning, onboarding walkthroughs, and routine maintenance setups to maintain seamless performance for the long run."}],principlesTitle:"TECHNICAL PRINCIPLES IN EVERY SYSTEM",principlesDesc:"WWCo prioritizes details that directly dictate system stability, lifetime durability, and the servicing feasibility of central water systems.",principles:[{title:"Pipelines & fittings",desc:"Curating materials perfectly matched to the operational pressures, temperatures, and conditions of each hot, cold, return, and filtration circuit."},{title:"Equipment & control units",desc:"Positioning Heat Pumps, storage tanks, filter columns, pumps, valves, and control panels according to transparent, easy-to-access operational schematics."},{title:"Operations & maintenance",desc:"Systems are engineered to facilitate straightforward monitoring, sanitization, drain-downs, and are fully aligned with our scheduled periodic maintenance."}]},process:{title:"Our Meticulous Process",subtitle:"A stable water system does not happen by accident. It is shaped through strict testing, hydraulic software analysis, and disciplined execution.",stepTitle:"Step"},contact:{title:"Schedule On-Site Survey & Engineering Proposal",subtitle:"Provide some details about your villa or project. Within 4 business hours, an expert WWCo design engineer will evaluate your specs and share a preliminary blueprint proposal.",formName:"Full Name",formPhone:"Mobile Number",formEmail:"Email (To receive proposed blueprints)",formLocation:"Location (Province/City)",formProjectSize:"Approximate Floor Size (sqm)",formInterest:"Interested Solutions (Select all that apply)",formInterestHot:"Heatpump Central Hot Water System",formInterestFilter:"Multi-barrier Central Water Filtration",formInterestHeat:"Cozy Hydronic Underfloor Heating",formSourceWater:"Inlet Source Water Type",formSourceTap:"Municipal treated water",formSourceWell:"Borehole well water / Other",formMessage:"Custom requirements (number of bathrooms, luxury fixtures like rain showers, size of pool, etc.)",btnSubmit:"Submit & Request Engineering Draft",submitSuccess:"Your request has been successfully registered! Our chief system designers will contact you to perform a quick diagnostic telephone brief, and dispatch the engineering report via email within 4 working hours.",companyInfo:"Water Wise Representative Office",address:"No 7 block 4, Nhan Dan Newspaper Residence, Xuan Phuong Ward, Hanoi",hotline:"+84 913 212 295",emailLabel:"Connection Email: waterwisecentralvn@gmail.com",workingHours:"Operating Hours: Mon - Sat (8:00 AM - 6:00 PM)"},blog:{title:"Insights & Advice",subtitle:"Understand correctly to design central water systems more effectively",description:"A compilation of articles to help developers, architects, and MEP teams understand central hot water, water filtration, underfloor heating, and practical site execution.",readMore:"Read article →",viewMore:"More Insights →",filterAll:"All",filterHot:"Central hot water",filterFilter:"Central filtration",filterHeat:"Floor heating",filterExp:"Site experience",prev:"← Prev",next:"Next →",backToHome:"Back to Home",noArticles:"No articles found in this category."}}};

export const viSolutions: Solution[] = [{id:"hotwater",title:"Hệ Nước Nóng Trung Tâm Heat Pump",subtitle:"Cấp nước nóng ổn định – tiết kiệm điện – an toàn khi sử dụng",description:`Hệ nước nóng trung tâm sử dụng Heat Pump kết hợp bồn tích nhiệt, bơm tuần hoàn hồi và hệ van điều khiển để cấp nước nóng cho nhiều khu vực trong biệt thự.

Giải pháp được tính toán theo số lượng phòng tắm, thói quen sử dụng, thời gian cao điểm và chiều dài đường ống, nhằm đảm bảo nước nóng ổn định, giảm thời gian chờ và hạn chế lãng phí năng lượng.`,ctaText:"Xem giải pháp nước nóng",badge:"GIẢI PHÁP NƯỚC NÓNG TRUNG TÂM",benefitsTitle:"Lợi ích chính",benefits:["Cấp nước nóng ổn định cho nhiều khu vực sử dụng trong biệt thự.","Giảm thời gian chờ nước nóng nhờ thiết kế đường hồi phù hợp.","Tiết kiệm điện hơn so với bình nóng lạnh điện trở truyền thống.","An toàn khi sử dụng, hạn chế rủi ro rò điện tại khu vực phòng tắm.","Phù hợp với các công trình có nhiều phòng tắm, bồn tắm hoặc sen cây lưu lượng lớn.","Hệ thống được tính toán theo nhu cầu thực tế, không chọn thiết bị theo cảm tính."],specsTitle:"Cấu hình hệ thống tiêu chuẩn",specs:[{label:"Heat Pump",value:"Thiết bị gia nhiệt chính, sử dụng nguyên lý bơm nhiệt để làm nóng nước với hiệu suất cao hơn điện trở thông thường."},{label:"Bồn tích nhiệt",value:"Lưu trữ nước nóng, giúp hệ thống có đủ dung tích cấp nước trong các khung giờ sử dụng cao điểm."},{label:"Bơm tuần hoàn hồi",value:"Duy trì nước nóng trên tuyến ống chính, giúp giảm thời gian chờ tại các điểm dùng xa."},{label:"Van điều khiển & van an toàn",value:"Hỗ trợ kiểm soát nhiệt độ, áp lực và đảm bảo hệ thống vận hành ổn định trong quá trình sử dụng."},{label:"Tủ điện điều khiển",value:"Điều khiển thiết bị, bơm hồi và các chế độ vận hành theo thiết kế của từng công trình."}],image:"/images/solutions/hot-water-heatpump.jpg",imageLabel:"TIÊU CHUẨN THIẾT KẾ WWCo",imageDesc:"Hệ thống được tính toán theo nhu cầu sử dụng, chiều dài đường ống, thời gian cao điểm và điều kiện kỹ thuật thực tế của từng biệt thự.",diagramTitle:"NGUYÊN LÝ TUẦN HOÀN NƯỚC NÓNG",diagramSteps:[{title:"Gia nhiệt",desc:"Heat Pump làm nóng nước và đưa vào bồn tích nhiệt để dự trữ."},{title:"Cấp nước nóng",desc:"Nước nóng từ bồn được phân phối đến các phòng tắm, bếp và khu vực sử dụng."},{title:"Tuần hoàn hồi",desc:"Tuyến ống hồi đưa nước nguội trên đường ống quay về hệ thống, giúp giảm thời gian chờ nước nóng."},{title:"Kiểm soát vận hành",desc:"Bơm hồi, cảm biến nhiệt và van điều khiển được thiết lập theo điều kiện sử dụng thực tế của công trình."}]},{id:"filtration",title:"Hệ Lọc Nước Trung Tâm Đầu Nguồn",subtitle:"Xử lý nước trước khi phân phối vào toàn bộ công trình",description:`Hệ lọc nước trung tâm được lắp tại đầu nguồn cấp nước, giúp xử lý cặn bẩn, clo dư, mùi khó chịu và độ cứng trong nước trước khi nước đi vào hệ thống đường ống sinh hoạt.

Giải pháp giúp bảo vệ thiết bị vệ sinh, sen vòi, máy nước nóng, đường ống và nâng cao chất lượng nước sử dụng hằng ngày trong biệt thự.`,ctaText:"Xem giải pháp lọc nước",badge:"GIẢI PHÁP LỌC NƯỚC ĐẦU NGUỒN",benefitsTitle:"Lợi ích chính",benefits:["Giảm cặn bẩn, bùn đất và tạp chất lơ lửng trong nguồn nước cấp.","Hỗ trợ xử lý clo dư, mùi khó chịu và cải thiện cảm quan nước sinh hoạt.","Giảm độ cứng trong nước, hạn chế bám cặn trên sen vòi, thiết bị vệ sinh và thiết bị nước nóng.","Góp phần bảo vệ đường ống, van, thiết bị nước nóng và các thiết bị sử dụng nước trong công trình.","Giúp chất lượng nước đầu nguồn ổn định hơn trước khi phân phối đến các khu vực sử dụng.","Hệ thống được lựa chọn theo chất lượng nước thực tế, lưu lượng sử dụng và điều kiện kỹ thuật của từng biệt thự."],specsTitle:"Cấu hình hệ thống tiêu chuẩn",specs:[{label:"Cột lọc thô",value:"Giữ lại cặn bẩn, bùn đất và các tạp chất lơ lửng có kích thước lớn trong nguồn nước cấp."},{label:"Cột than hoạt tính",value:"Hỗ trợ xử lý clo dư, mùi khó chịu và một số hợp chất hữu cơ ảnh hưởng đến cảm quan nước sinh hoạt."},{label:"Cột làm mềm nước",value:"Giảm độ cứng bằng cách trao đổi ion canxi, magie, giúp hạn chế hiện tượng bám cặn trong đường ống và thiết bị."},{label:"Van điều khiển tự động",value:"Điều khiển quá trình rửa lọc, hoàn nguyên hoặc tái sinh theo cấu hình thiết kế của từng hệ thống."},{label:"Bộ lọc tinh / thiết bị xử lý bổ sung",value:"Được lựa chọn theo chất lượng nước đầu vào và yêu cầu sử dụng thực tế của công trình."}],image:"/images/solutions/central-water-filtration.jpg",imageLabel:"TIÊU CHUẨN THIẾT KẾ WWCo",imageDesc:"Hệ lọc được lựa chọn theo chất lượng nước đầu vào, lưu lượng sử dụng, số lượng thiết bị và điều kiện vận hành thực tế của từng biệt thự.",diagramTitle:"NGUYÊN LÝ XỬ LÝ NƯỚC ĐẦU NGUỒN",diagramSteps:[{title:"Lọc cặn thô",desc:"Loại bỏ cặn bẩn, bùn đất và tạp chất lơ lửng trong nguồn nước cấp."},{title:"Khử mùi và clo dư",desc:"Than hoạt tính hỗ trợ giảm mùi khó chịu, clo dư và cải thiện cảm quan nước sinh hoạt."},{title:"Làm mềm nước",desc:"Hạt trao đổi ion giúp giảm canxi, magie, hạn chế đóng cặn trong đường ống và thiết bị nước nóng."},{title:"Ổn định chất lượng nước",desc:"Hệ thống được vận hành và rửa lọc theo chu kỳ phù hợp, giúp duy trì chất lượng nước đầu nguồn ổn định hơn trong quá trình sử dụng."}]},{id:"heating",title:"Hệ Sưởi Sàn Nước Nóng",subtitle:"Sưởi ấm đều – êm dịu – không tạo gió khô",description:`Hệ sưởi sàn nước nóng sử dụng nước ấm tuần hoàn trong hệ ống đặt dưới sàn, giúp truyền nhiệt đều từ mặt sàn lên không gian sử dụng.

Giải pháp phù hợp cho phòng ngủ, phòng khách, khu sinh hoạt chung và các không gian cần sự tiện nghi cao trong mùa lạnh, đặc biệt tại khu vực miền Bắc.`,ctaText:"Xem giải pháp sưởi sàn",badge:"GIẢI PHÁP SƯỞI SÀN NƯỚC NÓNG",benefitsTitle:"Lợi ích chính",benefits:["Tạo cảm giác ấm đều từ mặt sàn, dễ chịu hơn so với sưởi bằng gió nóng trực tiếp.","Không tạo luồng gió khô, phù hợp với không gian nghỉ ngơi và sinh hoạt gia đình.","Hệ thống ống được bố trí dưới sàn, không ảnh hưởng đến thẩm mỹ nội thất.","Có thể chia khu vực điều khiển theo từng phòng hoặc từng tầng tùy thiết kế.","Phù hợp với biệt thự, nhà ở cao cấp và công trình sử dụng vào mùa lạnh miền Bắc.","Cần được tính toán ngay từ giai đoạn thiết kế để đảm bảo cao độ nền, vật liệu hoàn thiện và phương án vận hành phù hợp."],specsTitle:"Cấu hình hệ thống tiêu chuẩn",specs:[{label:"Nguồn gia nhiệt",value:"Có thể sử dụng Heat Pump hoặc nguồn nước nóng phù hợp để cấp nhiệt cho hệ sưởi sàn."},{label:"Ống sưởi dưới sàn",value:"Đường ống được bố trí theo mặt bằng từng phòng, đảm bảo phân bổ nhiệt đều trên khu vực sử dụng."},{label:"Bộ chia manifold",value:"Phân phối nước ấm đến từng vòng ống sưởi và hỗ trợ cân bằng lưu lượng giữa các khu vực."},{label:"Bơm tuần hoàn",value:"Duy trì dòng nước ấm tuần hoàn trong hệ ống sưởi để truyền nhiệt ổn định."},{label:"Điều khiển nhiệt độ",value:"Kiểm soát nhiệt độ nước cấp và nhiệt độ phòng theo nhu cầu sử dụng thực tế."}],image:"/images/solutions/hydronic-floor-heating.jpg",imageLabel:"TIÊU CHUẨN THIẾT KẾ WWCo",imageDesc:"Hệ sưởi sàn được tính toán theo diện tích sử dụng, vật liệu hoàn thiện sàn, cao độ nền và nhu cầu vận hành thực tế của từng biệt thự.",diagramTitle:"NGUYÊN LÝ CẤU TẠO SƯỞI SÀN",diagramSteps:[{title:"Lớp nền kỹ thuật",desc:"Bề mặt nền được xử lý phù hợp trước khi thi công hệ ống sưởi."},{title:"Lớp cách nhiệt",desc:"Giúp hạn chế thất thoát nhiệt xuống phía dưới và tập trung truyền nhiệt lên không gian sử dụng."},{title:"Hệ ống sưởi",desc:"Ống sưởi được bố trí dưới sàn theo từng khu vực, dẫn nước ấm tuần hoàn để truyền nhiệt đều."},{title:"Lớp hoàn thiện sàn",desc:"Vật liệu hoàn thiện cần phù hợp với hệ sưởi sàn để đảm bảo khả năng truyền nhiệt và độ ổn định khi sử dụng."}]}];

export const enSolutions: Solution[] = [{id:"hotwater",title:"Heat Pump Central Hot Water System",subtitle:"Stable – energy efficient – safe hot water during usage",description:`A central hot water system utilizing thermodynamic heat pumps combined with hot water buffers, circulating return loops, and control valves to deliver hot water to multiple zones.

Our engineering is tailored to bathroom quantity, usage habits, peak times, and piping length to ensure reliable hot water, minimal waiting time, and reduced energy waste.`,ctaText:"View hot water solutions",badge:"CENTRAL HOT WATER SOLUTION",benefitsTitle:"Key Benefits",benefits:["Provides stable hot water to multiple areas throughout the villa.","Reduces waiting time for hot water with a properly designed return line.","Saves more electricity compared to traditional electric heating systems.","Safe during operation, eliminating electrical hazards in bathrooms.","Suitable for villas with many bathrooms, bathtubs, or high-flow rain showers.","The system is meticulously sized according to actual needs rather than guesswork."],specsTitle:"Standard System Configuration",specs:[{label:"Heat Pump",value:"Core heating unit utilizing heat pump principles to heat water with higher efficiency than electrical heaters."},{label:"Buffer Tank",value:"Stores hot water to ensure adequate supply during peak usage hours."},{label:"Circulation Pump",value:"Maintains hot water in main pipelines to minimize wait time at distant output fixtures."},{label:"Control & Safety Valves",value:"Controls temperature and pressure to ensure safe and stable operation."},{label:"Electrical Control Panel",value:"Controls heat pumps, circulation pumps, and operating schedules customized for each villa's layout."}],image:"/images/solutions/hot-water-heatpump.jpg",imageLabel:"WWCo DESIGN STANDARD",imageDesc:"The system is sized based on usage demands, pipe length, peak consumption hours, and actual engineering conditions of each villa.",diagramTitle:"HOT WATER CIRCULATION PRINCIPLE",diagramSteps:[{title:"Heating",desc:"Heat Pump warms water and feeds it into the buffer tank for storage."},{title:"Hot Water Supply",desc:"Hot water flows from the tank to bathrooms, kitchens, and other usage areas."},{title:"Return Loop",desc:"The return lines channel cooled water back to the system, reducing hot water wait times."},{title:"Operational Controls",desc:"Return pumps, temperature sensors, and control valves are set based on actual site conditions."}]},{id:"filtration",title:"Point-of-Entry Central Water Filtration System",subtitle:"Pre-treating water prior to whole-villa distribution",description:`Installed at the water inlet source, this central system removes suspended solids, chlorine residues, odors, and mineral hardness before water runs into household pipes.

This solution shields sanitation fixtures, shower taps, water heaters, and pipelines while elevating daily water comfort for villa occupants.`,ctaText:"View filtration solutions",badge:"POINT-OF-ENTRY FILTRATION SOLUTION",benefitsTitle:"Key Benefits",benefits:["Reduces sediment, silt, and suspended impurities in raw water supply.","Helps eliminate chlorine residue, unpleasant odors, and improves water aesthetics.","Reduces water hardness to limit lime scaling on fixtures, shower heads, and water heaters.","Protects pipes, valves, water heaters, and water-using equipment throughout the villa.","Maintains stable inlet water quality before distribution to points of use.","Each system is custom-selected based on raw water quality, flow rate, and villa specifications."],specsTitle:"Standard System Configuration",specs:[{label:"Coarse Sediment Column",value:"Traps larger particles, silt, and suspended impurities in the water supply."},{label:"Activated Carbon Column",value:"Reduces chlorine, bad odors, organic compounds, and enhances water taste and color."},{label:"Water Softener Column",value:"Exchanges Calcium and Magnesium ions to soften water, preventing lime scale build-up."},{label:"Automatic Control Valve",value:"Controls backwashing, purging, and regeneration according to system design schedules."},{label:"Polishing Filter / Optional Treatments",value:"Configured depending on incoming water quality and specific usage requirements."}],image:"/images/solutions/central-water-filtration.jpg",imageLabel:"WWCo DESIGN STANDARD",imageDesc:"Filtration systems are selected based on incoming water quality, service flow, fixture count, and operating conditions of each villa.",diagramTitle:"INLET WATER TREATMENT PRINCIPLE",diagramSteps:[{title:"Coarse Sediment Filtration",desc:"Filters out sand, dirt, and suspended particles from source water."},{title:"Deodorization & Dechlorination",desc:"Activated carbon resolves residual chlorine, organic taste, and odors."},{title:"Water Softening",desc:"Ion exchange resin captures calcium and magnesium, guarding pipelines from mineral scaling."},{title:"Quality Stabilization",desc:"System backwashes on scheduled cycles, sustaining clean and reliable inlet water quality."}]},{id:"heating",title:"Hydronic Underfloor Heating System",subtitle:"Even warmth – gentle comfort – draft-free heating",description:`Hydronic underfloor heating warms rooms by circulating warm water through a precise piping network buried beneath the subfloor, delivering quiet and balanced warmth.

Ideal for bedrooms, living rooms, lounges, and luxury spaces requiring superior comfort during winter, particularly suited for northern cold seasons.`,ctaText:"View heating solutions",badge:"UNDERFLOOR HEATING SOLUTION",benefitsTitle:"Key Benefits",benefits:["Provides safe, uniform heat radiating upward, ensuring higher comfort than drafty hot air blowers.","Produces zero hot gusts or dryness, perfect for bedrooms and residential living spaces.","Underfloor tubing installation remains completely out of sight, maximizing interior aesthetic freedom.","Allows zoned temperature regulations for individual rooms or distinct floor levels.","Perfectly matches high-end villas and family residences aiming for winter ambient premium comfort.","Requires deep pre-planning during early design phases to verify foundation height, subflooring, and operation pathways."],specsTitle:"Standard System Configuration",specs:[{label:"Heating Source",value:"Can utilize Heat Pumps or other compatible hot water generators to feed warmth into the distribution manifold."},{label:"Underfloor Piping",value:"Laid out according to room layouts to guarantee balanced and uniform heat distribution across zones."},{label:"Hydraulic Manifold",value:"Distributes safe water temperatures to circuit lines and handles precise flow balancing."},{label:"Circulation Pump",value:"Sustains warm water flows continuously across integrated loops for continuous thermal output."},{label:"Temperature Control",value:"Controls localized water supply and indoor parameters tailored directly to occupant demands."}],image:"/images/solutions/hydronic-floor-heating.jpg",imageLabel:"WWCo DESIGN STANDARD",imageDesc:"Heating layouts are precisely calculated based on effective floor area, surface flooring media, subfloor elevations, and specific heating habits of each villa.",diagramTitle:"HEATING STRUCTURE PRINCIPLE",diagramSteps:[{title:"Subfloor Preparation",desc:"Concrete foundation surfaces are cleaned and leveled prior to thermal setup."},{title:"Insulation Layer",desc:"Limits structural heat losses downwards and concentrates thermal flow towards living areas."},{title:"Heating Loop Network",desc:"Subfloor tubing carries continuous warm water circulation, radiating even thermal envelopes."},{title:"Final Floor Finish",desc:"Floor coverings must possess excellent thermal conductivity and stability under varying temperatures."}]}];

const originalViProjects: Project[] = [{id:"proj1",title:"Biệt thự nghỉ dưỡng Liên Chiểu, Đà Nẵng",location:"Liên Chiểu, Đà Nẵng",type:"hotwater",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",images:["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"],description:"WWCo nâng cấp hệ thống cấp nước nóng trung tâm từ bình điện trực tiếp sang Heat Pump kết hợp bồn tích nhiệt, giúp cấp nước nóng ổn định cho nhiều phòng tắm và khu vực sử dụng cùng lúc.",specs:[{label:"Thiết bị chính",value:"Bơm nhiệt Heat Pump và Bồn tích nhiệt bảo ôn"},{label:"Quy mô",value:"Biệt thự nghỉ dưỡng sát biển, 5 phòng ngủ"},{label:"Lợi ích",value:"Cấp nước nóng ổn định liên tục, giảm 75% tiêu thụ điện"}],highlights:["Thay thế hoàn toàn bình nóng lạnh cục bộ truyền thống.","Thiết lập đường cấp nước nóng tuần hoàn, áp lực đồng đều tại vòi.","Toàn bộ hệ thống đường ống sử dụng lớp bảo ôn cách nhiệt chất lượng."]},{id:"proj2",title:"Biệt thự song lập Vinhomes Riverside",location:"Long Biên, Hà Nội",type:"hotwater",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",description:"Thiết kế hệ nước nóng trung tâm cho biệt thự nhiều tầng, có bơm hồi tuần hoàn giúp giảm thời gian chờ nước nóng tại các phòng tắm xa phòng kỹ thuật.",specs:[{label:"Quy mô",value:"Biệt thự song lập 3 tầng nổi, 1 tầng hầm"},{label:"Công nghệ",value:"Bơm hồi tuần hoàn thông minh theo dải giờ sử dụng"},{label:"Đường ống cấp nước",value:"Ống chịu nhiệt bọc bảo ôn cách nhiệt dày"}],highlights:["Tối ưu thời gian chờ nước nóng tại vòi tắm xa nhất chỉ dưới 3 giây.","Phối hợp tuyến MEP dọc trục kỹ thuật gọn gàng, không đục phá kết cấu.","Lắp đặt van cân bằng áp lực bảo đảm không dao động nhiệt khi xả đa điểm."]},{id:"proj3",title:"Biệt thự cao cấp Ecopark Hưng Yên",location:"Văn Giang, Hưng Yên",type:"hotwater",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",description:"Triển khai hệ Heat Pump kết hợp bồn bảo ôn dung tích lớn, đáp ứng nhu cầu sử dụng nước nóng cho phòng tắm master, phòng trẻ em, bếp và khu giặt.",specs:[{label:"Cấu hình",value:"Heat Pump Inverter cùng bồn bảo ôn 400L"},{label:"Nhu cầu cấp nước",value:"Phục vụ đồng thời 4 cabin tắm đứng, bồn tắm master và khu bếp"},{label:"Kiểm soát an toàn",value:"Hệ thống van xả áp an toàn tự động kết nối tủ kỹ thuật"}],highlights:["Tính toán thủy lực dòng chảy tối ưu cho toàn bộ thiết bị phân tầng.","Bồn nước bảo ôn lòng tráng men bảo vệ nguồn nước vệ sinh tinh khiết lâu bền.","Hạn chế hao phí nhiệt lượng truyền tải nhờ tính toán bọc bảo ôn định hình."]},{id:"proj4",title:"Biệt thự khu đô thị Ciputra Hà Nội",location:"Tây Hồ, Hà Nội",type:"filtration",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",description:"WWCo thiết kế hệ lọc nước đầu nguồn gồm lọc cặn, than hoạt tính và làm mềm nước, giúp cải thiện chất lượng nước sinh hoạt và bảo vệ thiết bị vệ sinh trong biệt thự.",specs:[{label:"Thiết bị chính",value:"Hệ lọc đa tầng thông minh kết hợp làm mềm nước"},{label:"Chức năng",value:"Khử clo dư, lọc kim loại nặng, cặn thô và trung hòa canxi"},{label:"Lưu lượng lọc",value:"Cấp nước ổn định công suất 3.0 m³/giờ"}],highlights:["Xử lý dứt điểm tình trạng bám cặn trắng trên thiết bị sen vòi Grohe cao cấp.","Sử dụng đầu van tự động sục xả định kỳ dựa trên khối lượng nước thực tế.","Kiểm soát chất lượng nước đầu ra đạt chuẩn nước sinh hoạt cao cấp."]},{id:"proj5",title:"Nhà phố cao cấp Tây Hồ",location:"Tây Hồ, Hà Nội",type:"filtration",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",description:"Hệ lọc tổng được bố trí tại phòng kỹ thuật, xử lý nước đầu nguồn trước khi cấp đến toàn bộ thiết bị trong nhà, ưu tiên vận hành ổn định và dễ bảo trì.",specs:[{label:"Vị trí đặt hệ",value:"Phòng kỹ thuật tầng thượng, có mái che bảo vệ"},{label:"Quy chuẩn",value:"Bố trí khung inox 304 nguyên khối cứng cáp, chịu thời tiết tốt"},{label:"Phụ kiện đi kèm",value:"Bơm áp lực biến tần duy trì áp suất nước mượt mà"}],highlights:["Diện tích lắp đặt tinh gọn, tối ưu hóa lối đi bảo trì và thay thế vật liệu lọc.","Tránh sụt giảm áp lực nước cấp nhờ hệ thống bơm tăng áp biến tần đồng bộ.","Sử dụng vật liệu lọc chất lượng cao cho tuổi thọ sử dụng kéo dài."]},{id:"proj6",title:"Biệt thự nghỉ dưỡng Sóc Sơn",location:"Sóc Sơn, Hà Nội",type:"filtration",image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",description:"Khảo sát nguồn nước đầu vào và lựa chọn cấu hình lọc phù hợp với điều kiện sử dụng thực tế, giúp hệ thống cấp nước sinh hoạt ổn định hơn cho gia đình.",specs:[{label:"Đặc điểm nguồn nước",value:"Nước máy đô thị có chỉ số độ cứng và clo dư dao động"},{label:"Giải pháp",value:"Bộ cột lọc composite đúc dày kết hợp vật liệu lọc đa lớp"},{label:"Vận hành",value:"Hệ thống tự động súc rửa định kỳ không cần can thiệp thủ công"}],highlights:["Kết quả loại bỏ clo dư đạt hiệu suất tối ưu, bảo vệ sức khỏe làn da.","Bảo vệ đường ống nội bộ trong biệt thự khỏi nguy cơ đóng cặn canxi.","Giám sát kỹ thuật toàn diện trong quá trình kết nối với bể chứa trung gian."]},{id:"proj7",title:"Biệt thự nghỉ dưỡng Tam Đảo",location:"Tam Đảo, Vĩnh Phúc",type:"heating",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",description:"WWCo thiết kế và triển khai hệ sưởi sàn nước nóng cho khu vực phòng khách, phòng ngủ và không gian nghỉ dưỡng, mang lại cảm giác ấm đều, êm dịu trong mùa lạnh.",specs:[{label:"Hệ thống",value:"Sưởi sàn nước nóng tuần hoàn (Hydronic)"},{label:"Quy mô lắp đặt",value:"Diện tích sưởi ấm 220 m²"},{label:"Độ ấm hoạt động",value:"Duy trì nhiệt độ bề mặt dễ chịu từ 24°C - 28°C"}],highlights:["Không khô da và không tạo luồng gió đối lưu mang bụi mịn giống điều hòa nhiệt độ.","Thi công ống dẫn PE-Xa âm sàn liền mạch 100%, không sử dụng mối nối dưới nền.","Kiểm soát dải nhiệt theo phòng nhờ cụm Manifold phân phối lưu lượng độc lập."]},{id:"proj8",title:"Villa nghỉ dưỡng Ba Vì",location:"Ba Vì, Hà Nội",type:"heating",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",description:"Hệ sưởi sàn thủy lực được thiết kế đồng bộ với nguồn nhiệt, manifold, đường ống dưới sàn và bộ điều khiển nhiệt độ theo từng khu vực sử dụng.",specs:[{label:"Thiết bị cấp nhiệt",value:"Heat Pump chuyên dụng cho sưởi ấm hiệu suất cao"},{label:"Đường ống phân phối",value:"Ống sưởi chuyên dụng chống thẩm thấu oxy"},{label:"Bộ điều tiết",value:"Manifold inox tự động kết nối đầu van điện từ điều khiển"}],highlights:["Phân chia nhiệt độc lập cho 4 phòng ngủ và 1 phòng khách sinh hoạt chung.","Kiểm tra thử áp ngập nước nghiêm ngặt trước khi đổ bê tông hoàn thiện sàn.","Vận hành êm ái, bảo toàn tối ưu điện năng trong suốt mùa đông dài của vùng núi Ba Vì."]},{id:"proj9",title:"Biệt thự cao cấp Vinhomes Ocean Park",location:"Gia Lâm, Hà Nội",type:"all-in-one",image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",description:"WWCo triển khai đồng bộ hệ nước nóng trung tâm, lọc nước đầu nguồn và bơm hồi tuần hoàn, giúp toàn bộ hệ nước trong biệt thự vận hành ổn định, tiện nghi và dễ bảo trì.",specs:[{label:"Phạm vi lắp đặt",value:"Tích hợp hệ lọc đa tầng Clack kết hợp Heat Pump và bơm tuần hoàn hồi"},{label:"Thiết kế phòng máy",value:"Đấu nối song song, bố trí gọn trên một hệ khung đỡ cơ khí"},{label:"Độ thẩm mỹ",value:"Ống nhiệt bọc bảo ôn định hình đi vuông vức tỉ mỉ"}],highlights:["Toàn bộ căn nhà được làm mềm và loại bỏ hóa chất clo từ điểm cấp nguồn đầu tiên.","Nước nóng có sẵn ngay khi mở vòi, áp lực mạnh mẽ phân bổ đều tại mọi thiết bị vệ sinh.","Phòng kỹ thuật tinh gọn, tối ưu không gian vận hành trực quan."]},{id:"proj10",title:"Penthouse cao cấp Hà Nội",location:"Ba Đình, Hà Nội",type:"all-in-one",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",description:"Tư vấn và thiết kế giải pháp nước tổng thể cho căn hộ cao cấp, bao gồm hệ nước nóng trung tâm, lọc nước sinh hoạt và phương án bố trí thiết bị phù hợp với không gian kỹ thuật hạn chế.",specs:[{label:"Quy mô căn hộ",value:"Căn hộ Penthouse thông tầng diện tích 280 m²"},{label:"Hạn chế kỹ thuật",value:"Không gian ban công nhỏ, giới hạn tải trọng sàn kỹ thuật"},{label:"Phương án xử lý",value:"Module Heatpump lắp đứng mỏng kết hợp hệ lọc gọn góc tường"}],highlights:["Thiết kế riêng biệt cho không gian kỹ thuật hạn chế của các chung cư cao cấp.","Lắp đệm cao su giảm chấn triệt tiêu hoàn toàn rung động khi hệ thống vận hành.","Cung cấp giải pháp nước sinh hoạt cao cấp và nguồn nước nóng nhanh chóng."]},{id:"proj11",title:"Resort nghỉ dưỡng ven biển",location:"Hội An, Quảng Nam",type:"all-in-one",image:"https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",description:"Thiết kế hệ nước nóng trung tâm và lọc nước sinh hoạt cho khu nghỉ dưỡng, ưu tiên khả năng cấp nước ổn định trong giờ cao điểm và thuận tiện bảo trì vận hành.",specs:[{label:"Hạng mục",value:"Quy hoạch hạ tầng cấp nước tổng thể cho block 10 căn VIP"},{label:"Mấu chốt kỹ thuật",value:"Bơm Heat Pump công nghiệp kết hợp bồn bảo ôn tuần hoàn hồi dội"},{label:"Kháng ăn mòn",value:"Bọc phòng máy, phụ kiện chịu mặn bãi biển"}],highlights:["Ổn định nhiệt lượng dồi dào bất kể chu kỳ xả tắm cao điểm buổi tối.","Đường hồi tối ưu giúp bảo toàn tuần hoàn nóng hoàn hảo tiết kiệm điện năng tối đa.","Dễ dàng tiếp cận các điểm đo lường và thao tác sục rửa lọc định kỳ."]},{id:"proj12",title:"Biệt thự nghỉ dưỡng Đại Lải",location:"Phúc Yên, Vĩnh Phúc",type:"all-in-one",image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",description:"WWCo phối hợp từ giai đoạn thiết kế kỹ thuật để bố trí phòng máy, tuyến ống cấp – hồi, hệ lọc đầu nguồn và thiết bị nước nóng phù hợp với công năng sử dụng của biệt thự.",specs:[{label:"Tương tác từ sớm",value:"Phối hợp với đơn vị thi công hoàn thiện phần thô và đội MEP"},{label:"Tích hợp",value:"Nước nóng Heatpump + Lọc mềm đa tầng + Ống PEX cao cấp âm sàn"},{label:"Không gian lắp đặt",value:"Bệ phòng máy thiết kế riêng dưới bán hầm kỹ thuật"}],highlights:["Loại bỏ triệt để xung đột về cao độ dầm sàn và tuyến ống kỹ thuật dẫm chéo.","Mang lại hệ nước vận hành bền bỉ, dễ dàng nâng cấp hoặc thay lõi thiết bị định kỳ.","Hướng dẫn và bàn giao hồ sơ hoàn công chi tiết cho chủ đầu tư yên tâm sử dụng."]}];

const viAdditionalProjects: Project[] = [
  {
    id: "proj_vinhomes_riverside",
    title: "Biệt thự đơn lập Vinhomes Riverside",
    location: "Long Biên, Hà Nội",
    type: "hotwater",
    image: "/images/projects/vinhomes-riverside-single-01.jpg",
    images: [
      "/images/projects/vinhomes-riverside-single-01.jpg",
      "/images/projects/vinhomes-riverside-single-02.jpg",
      "/images/projects/vinhomes-riverside-single-03.jpg",
      "/images/projects/vinhomes-riverside-single-04.jpg"
    ],
    description: "Thiết kế hệ nước nóng trung tâm cho biệt thự nhiều tầng, có bồn tích nhiệt và bơm hồi tuần hoàn giúp giảm thời gian chờ nước nóng tại các phòng tắm xa vòi trung tâm.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự đơn lập nhiều phòng tắm, yêu cầu cấp nước nóng ổn định cho các khu vực sử dụng đồng thời và tối ưu thời gian chờ nước nóng." },
      { label: "Loại hình", value: "Villa / Biệt thự đơn lập" },
      { label: "Quy mô", value: "3 tầng, 1 tầng hầm, 6 phòng tắm" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Long Biên, Hà Nội" },
      { label: "Hệ nước nóng", value: "Heat Pump trung tâm + bồn tích nhiệt + bơm hồi tuần hoàn" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Heat Pump trung tâm, Bồn tích nhiệt bảo ôn, Bơm hồi tuần hoàn, Đường ống cấp – hồi.",
      "TIÊU CHUẨN: Tối ưu thời gian chờ nước nóng tại vòi tắm xa nhất chỉ dưới 3 giây định hình.",
      "TIÊU CHUẨN: Đồng bộ toàn bộ thiết bị, van, bơm và hệ đường ống hồi nhiệt cao cấp.",
      "TIÊU CHUẨN: Hướng dẫn vận hành chi tiết và thiết lập chế độ bảo trì tự động sau bàn giao."
    ]
  },
  {
    id: "proj_ecopark_grand",
    title: "Biệt thự đảo Ecopark Grand",
    location: "Văn Giang, Hưng Yên",
    type: "all-in-one",
    image: "/images/projects/ecopark-complete-01.jpg",
    images: [
      "/images/projects/ecopark-complete-01.jpg",
      "/images/projects/ecopark-complete-02.jpg",
      "/images/projects/ecopark-complete-03.jpg",
      "/images/projects/ecopark-complete-04.jpg"
    ],
    description: "Giải pháp toàn diện tích hợp nước nóng trung tâm Heat Pump, lọc nước sinh hoạt đầu nguồn làm mềm đa cấp và hệ tuần hoàn hồi điều áp mượt mà.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự đảo cao cấp có diện tích lớn, mong muốn chất lượng nguồn nước sinh hoạt đạt chuẩn tinh khiết làm mềm tối ưu và cấp nước nóng tuần hoàn hồi dội dồi dào." },
      { label: "Loại hình", value: "Biệt thự đảo cao cấp / Dinh thự" },
      { label: "Quy mô", value: "3 tầng nổi rộng thoáng, diện tích sàn sử dụng 500m²" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Khu đô thị biệt thự đảo Ecopark, Hưng Yên" },
      { label: "Hệ nước nóng", value: "Heat Pump Inverter + bồn bảo ôn 500L + bơm hồi tuần hoàn thông minh" },
      { label: "Hệ lọc nước", value: "Trạm lọc nước sinh hoạt đa tầng làm mềm muối hoàn nguyên" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Bơm nhiệt trung tâm, Hệ thống lọc đa tầng làm mềm nước, Hệ tuần hoàn điều áp.",
      "TIÊU CHUẨN: Loại bỏ hoàn toàn clo dư, canxi bám cặn sen vòi và chất bẩn lơ lửng.",
      "TIÊU CHUẨN: Nước nóng tuần hoàn tức thì tại mọi vòi xả trong biệt thự dưới 3 giây.",
      "TIÊU CHUẨN: Tự động hoàn súc vật liệu lọc theo khối lượng nước tiêu thụ thực tế."
    ]
  },
  {
    id: "proj_dailai_heating",
    title: "Biệt thự sưởi sàn bám hồ Đại Lải",
    location: "Phúc Yên, Vĩnh Phúc",
    type: "heating",
    image: "/images/projects/dailai-heating-01.jpg",
    images: [
      "/images/projects/dailai-heating-01.jpg",
      "/images/projects/dailai-heating-02.jpg",
      "/images/projects/dailai-heating-03.jpg"
    ],
    description: "Tích hợp hệ sưởi sàn nước nóng tuần hoàn thủy lực PE-Xa, bền bỉ vượt qua mùa đông buốt lạnh ẩm ướt vùng hồ Đại Lải.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự nghỉ dưỡng ven vùng hồ ẩm ướt khí lạnh sương muối, cần sưởi ấm dễ chịu cho toàn bộ không gian sinh hoạt." },
      { label: "Loại hình", value: "Biệt thự ven hồ / Nghỉ dưỡng" },
      { label: "Quy mô", value: "2 tầng nổi, diện tích sưởi sàn 250m²" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Khu du lịch sinh thái hồ Đại Lải, Phúc Yên, Vĩnh Phúc" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Sưởi ấm thủy lực âm sàn sử dụng ống PE-Xa Thụy Sĩ chống thẩm thấu oxy" }
    ],
    highlights: [
      "CÁC MODULE: Heat Pump chuyên dụng tạo nhiệt, Bộ chia Manifold inox, Đường PE-Xa sưởi đi vuông vức dưới sàn.",
      "TIÊU CHUẨN: Mang lại áp ấm dịu nhẹ từ dưới chân, giữ độ ẩm tự nhiên, không đối lưu mang bụi.",
      "TIÊU CHUẨN: Thử áp liên tục ròng suốt 48 giờ trước khi đổ vữa bảo vệ bê tông.",
      "TIÊU CHUẨN: Hệ thống van điện từ điều khiển dải nhiệt độc lập theo từng phòng."
    ]
  },
  {
    id: "proj_tayho_filtration",
    title: "Biệt thự lọc nước trung tâm Tây Hồ",
    location: "Tây Hồ, Hà Nội",
    type: "filtration",
    image: "/images/projects/tayho-filtration-01.jpg",
    images: [
      "/images/projects/tayho-filtration-01.jpg",
      "/images/projects/tayho-filtration-02.jpg",
      "/images/projects/tayho-filtration-03.jpg"
    ],
    description: "Bố trí trạm lọc nước sinh hoạt tổng làm mềm đa mức Clack nhập khẩu, triệt tiêu triệt để hiện tượng bám cặn trắng canxi sen vòi cao cấp.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự đơn lập hoàn thiện siêu sang có thiết bị vệ sinh mạ bóng xa xỉ cần lọc làm mềm nguồn nước máy đô thị." },
      { label: "Loại hình", value: "Biệt thự đơn lập đô thị" },
      { label: "Quy mô", value: "4 tầng nổi, nhu cầu cấp lưu lượng đỉnh 4.0 m³/h" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Khu đô thị Starlake Tây Hồ Tây, Hà Nội" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Cột lọc thô đa mức + Cột hấp thụ carbon + Cột làm mềm resin trao đổi ion Clack" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Khung inox bảo vệ, Hệ thống van Clack, Cột lọc composite cao cấp đúc dầy.",
      "TIÊU CHUẨN: Đảm bảo nước sạch trong tinh khiết, loại bỏ sắt rỉ sét và mùi clo hắc.",
      "TIÊU CHUẨN: Bảo vệ vĩnh viễn bề mặt các thiết bị sứ, sen vòi phòng tắm Hansgrohe bền bỉ.",
      "TIÊU CHUẨN: Hệ thống tự động súc rửa tái sinh resin bằng muối tinh sấy khô định kỳ."
    ]
  },
  {
    id: "proj_metropolis_penthouse",
    title: "Penthouse Vinhomes Metropolis Ba Đình",
    location: "Ba Đình, Hà Nội",
    type: "all-in-one",
    image: "/images/projects/metropolis-penthouse-01.jpg",
    images: [
      "/images/projects/metropolis-penthouse-01.jpg",
      "/images/projects/metropolis-penthouse-02.jpg"
    ],
    description: "Giải pháp trạm máy lọc tổng thể làm mềm UF tích hợp Heat Pump mỏng đứng phù hợp tối đa cho ban công căn hộ cao cấp.",
    specs: [
      { label: "Khái quát công trình", value: "Căn Penthouse thông tầng cao cấp yêu cầu vận hành tĩnh lặng triệt để, không rung lắc sàn và chiếm dụng ít ban công kỹ thuật." },
      { label: "Loại hình", value: "Căn hộ Penthouse thông tầng cao cấp" },
      { label: "Quy mô", value: "Diện tích sử dụng 350m², 5 phòng vệ sinh cao cấp" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Vinhomes Metropolis, Liễu Giai, Hà Nội" },
      { label: "Hệ nước nóng", value: "Heat Pump mỏng đứng + bồn tích nhiệt siêu dẹt nằm góc tường" },
      { label: "Hệ lọc nước", value: "Hệ siêu lọc UF sợi rỗng + Cột làm mềm resin Clack phẳng mỏng" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Bơm nhiệt dạng mỏng, Cột làm mềm thiết kế dẹt, Khung hấp xyclon bọc bệ triệt tiêu rung.",
      "TIÊU CHUẨN: Tiêu âm triệt để dưới 30dB, hoàn toàn thoải mái cho giấc ngủ về đêm.",
      "TIÊU CHUẨN: Cấp nước nóng áp mượt dồi dào cho bồn tắm jacuzzi xả dồn đồng thời.",
      "TIÊU CHUẨN: Trạm nắp hộp sơn tĩnh điện tệp màu tường, nâng cao mỹ cảm ban công."
    ]
  },
  {
    id: "proj_tamdao_manor",
    title: "Biệt thự sườn đồi Tam Đảo",
    location: "Tam Đảo, Vĩnh Phúc",
    type: "all-in-one",
    image: "/images/projects/tamdao-heating-hotwater-01.jpg",
    images: [
      "/images/projects/tamdao-heating-hotwater-01.jpg",
      "/images/projects/tamdao-heating-hotwater-02.jpg",
      "/images/projects/tamdao-heating-hotwater-03.jpg"
    ],
    description: "Hệ thống cấp nước nóng trung tâm và sưởi sàn dầm sấy khô thoáng, đánh bại khí hậu rét lạnh nồm ẩm đặc thù vùng núi cao.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự đồi chịu không khí núi sương ẩm thu đông lạnh sâu, nồm ẩm nướt sàn, đòi hỏi giải pháp sấy mặt sàn sưởi mịn và đun cấp nước nóng lớn." },
      { label: "Loại hình", value: "Biệt thự nghỉ dưỡng đồi núi" },
      { label: "Quy mô", value: "3 tầng đồi dốc, diện tích sưởi sấy 300m²" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Khu đồi biệt thự sân Golf Tam Đảo, Vĩnh Phúc" },
      { label: "Hệ nước nóng", value: "Heat Pump sưởi đun nhanh hiệu suất sưởi cao + bồn bảo ôn 500L đúc cách nhiệt" },
      { label: "Hệ lọc nước", value: "Bộ lọc thô đa mức làm trong nước bể dâng" },
      { label: "Hệ sưởi sàn", value: "Sưởi ấm thủy lực sàn Hydronic ống chịu nhiệt Thụy Sĩ âm sàn" }
    ],
    highlights: [
      "CÁC MODULE: Trạm Heat Pump sưởi đun kép độc lập lập trình, Hệ phân phối Manifold sưởi, Đường ống uốn quanh co liên tục dưới sàn.",
      "TIÊU CHUẨN: Duy trì dải ấm bề mặt êm ái 24-28 °C, đi bước thoải mái không rợn chân.",
      "TIÊU CHUẨN: Nước nóng tuần hoàn hồi dội giữ dòng tắm dồi dào, ngắt nồm ẩm mốc sàn gỗ hữu hiệu.",
      "TIÊU CHUẨN: Thiết kế phòng máy an toàn cách ly dầm dính rung chấn tuyệt đối."
    ]
  },
  {
    id: "proj_ciputra_castle",
    title: "Biệt thự lâu đài Ciputra Tây Hồ",
    location: "Tây Hồ, Hà Nội",
    type: "all-in-one",
    image: "/images/projects/ciputra-allinone-01.jpg",
    images: [
      "/images/projects/ciputra-allinone-01.jpg",
      "/images/projects/ciputra-allinone-02.jpg",
      "/images/projects/ciputra-allinone-03.jpg"
    ],
    description: "Giải pháp nước toàn diện đỉnh cao bao gồm lọc trung tâm Clack làm mềm cation đa hạt kết hợp bơm nhiệt Heat Pump siêu tải sưởi đun nóng dồi dào.",
    specs: [
      { label: "Khái quát công trình", value: "Lâu đài dinh thự tân cổ điển có quy mô sử dụng nước cực lớn, nhiều cabin sen vòi tắm mưa âm trần đòi hỏi áp lực lọc thô làm mềm dồi dào và nước nóng nhanh dội sướng." },
      { label: "Loại hình", value: "Dinh thự / Lâu đài kiều diễm" },
      { label: "Quy mô", value: "4 tầng nổi, 1 tầng hầm, 8 phòng tắm cao cấp kết hợp bể bơi ngoài trời" },
      { label: "Chủ đầu tư", value: "Khách hàng thương gia cao cấp" },
      { label: "Địa chỉ", value: "Khu lâu đài lâu đời đô thị Ciputra Nam Thăng Long, Hà Nội" },
      { label: "Hệ nước nóng", value: "Heat Pump công nghiệp 8HP + bồn bảo ôn thép tráng men 1000L tuần hoàn hồi" },
      { label: "Hệ lọc nước", value: "Trạm lọc thô làm mềm Clack xả tự động kép vận hành luân phiên" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Bộ làm mềm Clack Mỹ, Hệ bơm tăng áp biến tần, Bơm hồi dội tuần hoàn bù nhiệt.",
      "TIÊU CHUẨN: Áp suất vòi sen tắm mưa âm trần dồi dào cực đã bất chấp xả đa phòng đồng thời.",
      "TIÊU CHUẨN: Độ tinh sạch nước sinh hoạt kiểm soát cực chuẩn theo tiêu chuẩn phòng thí nghiệm.",
      "TIÊU CHUẨN: Bàn giao toàn diện tủ điều rơle thông báo quá dải, hụt rò rỉ áp lực mượt mà."
    ]
  },
  {
    id: "proj_gamuda_gardens",
    title: "Biệt thự đơn lập Gamuda Gardens",
    location: "Hoàng Mai, Hà Nội",
    type: "hotwater",
    image: "/images/projects/gamuda-hotwater-01.jpg",
    images: [
      "/images/projects/gamuda-hotwater-01.jpg",
      "/images/projects/gamuda-hotwater-02.jpg"
    ],
    description: "Hệ bơm nhiệt Heat Pump đun nóng hồi nhanh dồi dào và bồn tích áp ổn định thủy lực, phục vụ tối đa bát sen mưa cỡ lớn.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự đơn lập cải tạo trục MEP cấp nước nóng yếu chập chờn, yêu cầu hệ nước nóng mạnh mẽ bù đắp bát sen xả vòi lớn phòng ngủ Master." },
      { label: "Loại hình", value: "Villa / Biệt thự đơn lập phố thị" },
      { label: "Quy mô", value: "3.5 tầng, 5 phòng vệ sinh sử dụng sen vòi lớn" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Gamuda Gardens, Hoàng Mai, Hà Nội" },
      { label: "Hệ nước nóng", value: "Heat Pump Inverter đun đun hồi tuần hoàn bù dội + bồn bảo ôn 400L chịu áp" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Máy nén bơm nhiệt, Bồn chứa tráng men chịu áp lực, Bơm tuần hoàn rà dải giờ thông minh.",
      "TIÊU CHUẨN: Áp dòng sen tắm Master cực mạnh, nước nóng ổn định tuyệt hảo ròng suốt 24 giờ.",
      "TIÊU CHUẨN: Đường cấp bọc cách nhiệt dày bảo ôn chống thất thoát nhiệt qua tường gạch thô.",
      "TIÊU CHUẨN: Bàn giao tủ nguồn bảo vệ quá dòng quá áp an toàn kỹ thuật cao cấp."
    ]
  },
  {
    id: "proj_bacninh_garden",
    title: "Biệt thự Vinhomes Bắc Ninh",
    location: "TP. Bắc Ninh",
    type: "filtration",
    image: "/images/projects/bacninh-filtration-01.jpg",
    images: [
      "/images/projects/bacninh-filtration-01.jpg",
      "/images/projects/bacninh-filtration-02.jpg"
    ],
    description: "Trạm xử lý lọc đa vật liệu lọc khử rỉ phèn sệt vàng màng đóng sen chậu và làm mềm canxi cứng hạt trao đổi clack.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự rộng có dòng cấp đô thị bị dính bùn rỉ rỉ và đá vôi bám cặn loang sen inox, cần xử lý lọc thô làm trong mềm toàn bộ." },
      { label: "Loại hình", value: "Biệt thự sân vườn phố thị" },
      { label: "Quy mô", value: "3 tầng nổi, công suất lọc trung bình dồi dào 2.5 m³/h" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Biệt thự Vinhomes Bắc Ninh, TP. Bắc Ninh" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Trạm lọc composite đúc cát thạch anh làm trong + súc Clack ion resin mềm bồn muối" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Bộ cột lọc lọc thô làm trong, Cột khử carbon organic, Cột cation trao đổi resin, Khung giá inox 304.",
      "TIÊU CHUẨN: Nước trong vắt, sạch chất oxy clo mùi hắc và giữ nồng độ canxi mềm sạch da.",
      "TIÊU CHUẨN: Triệt tiêu vĩnh viễn màng ố rỉ đóng vàng trên chậu bệ xí Grohe nhập cao đẳng.",
      "TIÊU CHUẨN: Đầu điều phối tự động hoàn salt hoàn lưu resin dựa trên dải nước định mức dòng xả."
    ]
  },
  {
    id: "proj_bavi_sanctuary",
    title: "Nghỉ dưỡng sườn đồi Ba Vì",
    location: "Ba Vì, Hà Nội",
    type: "heating",
    image: "/images/projects/bavi-heating-01.jpg",
    images: [
      "/images/projects/bavi-heating-01.jpg",
      "/images/projects/bavi-heating-02.jpg",
      "/images/projects/bavi-heating-03.jpg"
    ],
    description: "Hệ sưởi sàn thủy lực tản nhiệt nước ấm PE-Xa Schweizer nhập nguyên kiện chịu áp bọc sấy bê tông nền dầy ấm êm cực kỳ.",
    specs: [
      { label: "Khái quát công trình", value: "Villa sườn đồi hoang vu có mùa gió Bắc căm căm nồm ẩm rất dữ, cần sưởi ấm sàn kín ranh ổn định nhiệt mượt mà cho giấc ngủ trẻ con người cao tuổi." },
      { label: "Loại hình", value: "Biệt thự sườn đồi nghỉ dưỡng" },
      { label: "Quy mô", value: "1 tầng sảnh thông sàn đầm gỗ, diện tích sưởi nắp 180m²" },
      { label: "Chủ đầu tư", value: "Hộ gia đình" },
      { label: "Địa chỉ", value: "Sườn đồi du lịch Ba Vì, Hà Nội" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Sưởi nền bê tông thủy lực nước nhiệt PE-Xa chống thấm láng" }
    ],
    highlights: [
      "CÁC MODULE: Máy nén Heat Pump sưởi đầm chuyên dùng, Trạm Manifold inox cao dải gạt van, Ống PE-Xa swiss đi dầm sàn liên mạch.",
      "TIÊU CHUẨN: Sưởi dạt dào đồng đều mặt đệm gầm gỗ, không khói bụi khô rát niêm mạc mũi.",
      "TIÊU CHUẨN: Nén khí rà rỉ dầm 8 bar ngập suốt 48 giờ trước lắp cán xi thạch.",
      "TIÊU CHUẨN: Tự ngắt rơ le dải sưởi khi đạt mốc nhiệt dải phòng cài đặt tiện nghi."
    ]
  },
  {
    id: "proj_new11",
    title: "Biệt thự Vinhomes Green Bay Nam Từ Liêm",
    location: "Nam Từ Liêm, Hà Nội",
    type: "all-in-one",
    image: "/images/projects/vinhomes-greenbay-01.jpg",
    images: [
      "/images/projects/vinhomes-greenbay-01.jpg",
      "/images/projects/vinhomes-greenbay-02.jpg"
    ],
    description: "Giải pháp toàn vẹn đỉnh cao gồm lọc nước sinh hoạt làm mềm đa khối Clack Hoa Kỳ kết hợp bơm nhiệt Heat Pump dội tuần hoàn thông minh mượt mà.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự lô góc đắc địa yêu cầu nguồn cấp nước sạch dồi dào, lọc canxi tinh lọc bảo vệ nội thất và nước nóng dội áp lực mạnh mẽ." },
      { label: "Loại hình", value: "Biệt thự đơn lập đô thị" },
      { label: "Quy mô", value: "3 tầng nổi sang rộng, 1 hầm kỹ thuật, 6 vệ sinh khép kín" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân VIP" },
      { label: "Địa chỉ", value: "Khu biệt thự Vinhomes Green Bay, Nam Từ Liêm, Hà Nội" },
      { label: "Hệ nước nóng", value: "Heat Pump sưởi Inverter trung tâm + bồn bảo ôn thép men 500L đun dội tuần hoàn" },
      { label: "Hệ lọc nước", value: "Trạm lọc thô đa tầng Clack làm mềm hạt resin hoàn muối xả" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Bơm nhiệt trung tâm, Trạm cột composite làm mềm xả Clack Mỹ, Hệ bơm tăng áp biến tần mượt.",
      "TIÊU CHUẨN: Cấp nước nóng siêu nhanh có sẵn tại vòi tắm trong vòng dưới 2 giây.",
      "TIÊU CHUẨN: Loại bỏ rỉ sắt bụi phù sa, nước sau súc đạt độ an toàn vệ sinh tối cao dùng dưỡng da tinh giản.",
      "TIÊU CHUẨN: Khung bệ SUS304 lắp gọn ghẽ cách ly chống rung tác dụng cấu kiện biệt thự."
    ]
  },
  {
    id: "proj_new12",
    title: "Biệt thự biển Sonasea Vân Đồn",
    location: "Vân Đồn, Quảng Ninh",
    type: "hotwater",
    image: "/images/projects/sonasea-vandon-01.jpg",
    images: [
      "/images/projects/sonasea-vandon-01.jpg",
      "/images/projects/sonasea-vandon-02.jpg"
    ],
    description: "Trực tiếp lắp máy Heat Pump trung tâm đun nhiệt bù tốc độ cao, bọc vách chống ăn mòn sương muối bão cát bãi biển Quảng Ninh.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự view trực diện bờ vịnh cực đẹp nhưng chịu gió biển bão mặn tàn phá rỉ gỉ thép rất ghê gớm, yêu cầu cấp nước nóng dồi dào an toàn dẻo dai." },
      { label: "Loại hình", value: "Biệt thự biển nghỉ dưỡng" },
      { label: "Quy mô", value: "2 tầng nổi, sảnh sục bồn tắm sục Jacuzzi âm sàn ngoài trời" },
      { label: "Chủ đầu tư", value: "Chủ đầu tư cá nhân" },
      { label: "Địa chỉ", value: "Sonasea Vân Đồn Harbor City, Quảng Ninh" },
      { label: "Hệ nước nóng", value: "Heat Pump đúc vỏ nhựa ABS xớ xi epoxy + bồn chứa Inox 316L bền kiên cố" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Block bơm vỏ kháng mặn, bồn chứa bảo ôn 316 dầy chuyên biển, van an toàn đồng thau mạ kim.",
      "TIÊU CHUẨN: Chống gỉ ăn mòn bão gió biển muối ròng trên 15 năm vận hành sưởi đun mượt.",
      "TIÊU CHUẨN: Cung cấp dòng xả nóng Jacuzzi đầy bồn chỉ trong vài chục phút đun tốc bù.",
      "TIÊU CHUẨN: Đường xả tu hồi tuần hoàn hồi bù giữ ấm dòng khi tháo vòi xa khu tum."
    ]
  },
  {
    id: "proj_new13",
    title: "Biệt thự Thảo Điền Quận 2",
    location: "Quận 2, TP. HCM",
    type: "filtration",
    image: "/images/projects/thaodien-filtration-01.jpg",
    images: [
      "/images/projects/thaodien-filtration-01.jpg",
      "/images/projects/thaodien-filtration-02.jpg"
    ],
    description: "Kiến thiết trạm giải pháp màng siêu lọc thô đa mức làm trong mềm ion natri xử lý triệt để nước nồng mùi clo dư đô thị Thảo Điền.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự sân vườn Thảo Điền mong muốn lọc tổng mềm ngọt dòng nước máy đô thị nhiều rỉ sắt và clo hăng bảo vệ bé con tắm gội dịu mát." },
      { label: "Loại hình", value: "Biệt thự tách biệt sân vườn thoáng" },
      { label: "Quy mô", value: "3 tầng nổi cổ kính rộng rãi, bồn dâng kỹ thuật trần" },
      { label: "Chủ đầu tư", value: "Chủ đầu tư quốc tế" },
      { label: "Địa chỉ", value: "Khu biệt thự Thảo Điền, Quận 2, TP. Hồ Chí Minh" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Cột Composite lọc carbon khử clo + Cột cation trao đổi clack natri làm mềm" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Cột lọc đa khối dừa than nén mịn, cột resin trao đổi cation, bơm biến tần tự áp áp lực cao.",
      "TIÊU CHUẨN: Không còn mùi clo hôi thâm, đem lại vị nước gội đầu mềm mại ngọt mát lành dồi dào.",
      "TIÊU CHUẨN: Giải quyết dứt màng đóng đá vôi cá bẩn loang sàn chậu tắm kính.",
      "TIÊU CHUẨN: Cơ chế tự động hoàn nguyên sấy bồn resin cực kỳ tĩnh lặng về đêm."
    ]
  },
  {
    id: "proj_new14",
    title: "Penthouse Vinhomes Golden River Quận 1",
    location: "Quận 1, TP. HCM",
    type: "all-in-one",
    image: "/images/projects/goldenriver-penthouse-01.jpg",
    images: [
      "/images/projects/goldenriver-penthouse-01.jpg",
      "/images/projects/goldenriver-penthouse-02.jpg"
    ],
    description: "Trạm nước toàn vẹn siêu mỏng đứng bọc nắp thẩm mỹ dẹt tinh xảo tại logia ranh giới, cấp nước tươi uống tại vòi nhà bếp sành điệu.",
    specs: [
      { label: "Khái quát công trình", value: "Siêu căn hộ Penthouse tầm nhìn sông Sài Gòn, mặt sàn kỹ thuật hẹp bắt buộc dùng hệ thống lọc làm mềm nước đứng siêu gọn mỏng kết hợp Heat Pump dẹt chạy êm ru." },
      { label: "Loại hình", value: "Siêu Penthouse thông tầng đẳng cấp vương giả" },
      { label: "Quy mô", value: "Diện tích sử dụng 400m², 6 khu tắm sen VIP" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân siêu giàu" },
      { label: "Địa chỉ", value: "Vinhomes Golden River, Quận 1, TP. Hồ Chí Minh" },
      { label: "Hệ nước nóng", value: "Heat Pump mỏng dẹt vách đứng + bồn chứa dốc đứng hẹp góc" },
      { label: "Hệ lọc nước", value: "Màng UF siêu tinh khiết sợi thủy tinh + Cột ion dẹt Clack mỏng sang trọng" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Sợi m UF lọc khuẩn 0.01 micron, Cột cation dẹt, bơm rà dải rung chấn dập tắt rung lắc logia.",
      "TIÊU CHUẨN: Chuẩn sấy nước ngon sạch tuyệt đỉnh uống trực tiếp tại đảo bếp không đun sôi.",
      "TIÊU CHUẨN: Tiêu cách âm vỏ cách nhiệt tối ưu không gây ù nền sàn ngủ ban đêm biệt lập.",
      "TIÊU CHUẨN: Nắp sơn thẩm mỹ đồng màu nền mang vẻ sang tuyệt hảo hài hòa kiến trúc."
    ]
  },
  {
    id: "proj_new15",
    title: "Khách sạn boutique Phố cổ Hà Nội",
    location: "Hoàn Kiếm, Hà Nội",
    type: "hotwater",
    image: "/images/projects/honoicotyc-boutique-01.jpg",
    images: [
      "/images/projects/honoicotyc-boutique-01.jpg",
      "/images/projects/honoicotyc-boutique-02.jpg"
    ],
    description: "Hệ thống trạm Heat Pump kép phục vụ tuần dội cấp bù nhanh cho khối khách sạn nghỉ dưỡng cao cấp chật hẹp MEP hẻm sâu.",
    specs: [
      { label: "Khái quát công trình", value: "Khách sạn phong cách Indochine phố cổ cải tạo tum hẹp đứng dột gió lạnh phập phồng, yêu cầu cấp nước nóng dồi dào áp lực mạnh mẽ ròng ngày dập tắt phàn nàn du khách." },
      { label: "Loại hình", value: "Khách sạn cổ điển cải tạo" },
      { label: "Quy mô", value: "6 tầng nổi, 20 phòng phòng tắm khép kín cao đẳng" },
      { label: "Chủ đầu tư", value: "Chủ đầu tư Khách sạn" },
      { label: "Địa chỉ", value: "Phố cổ Hoàn Kiếm, Hà Nội" },
      { label: "Hệ nước nóng", value: "Trạm máy Heat Pump kép lắp song song + bồn chứa nhiệt đúc lót 2000L tuần tự dội hồi" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Heat Pump kép, bồn bảo ôn tải lớn đặc chủng, van cân lưu hồi, hệ bơm tăng dòng điện tử Grundfos.",
      "TIÊU CHUẨN: Cấp tắm đầy đủ 20 vòi tắm mưa áp bão cao đồng thời không tẹo hụt nhiệt.",
      "TIÊU CHUẨN: Hồi bù thông minh tự động kích tốc dựa trên dải giờ dùng khách tắm sục.",
      "TIÊU CHUẨN: Giá thảm cao su cách chấn dập hoàn toàn tiếng ồn ù dội truyền trần bê gạch mỏng."
    ]
  },
  {
    id: "proj_new16",
    title: "Biệt thự nghỉ dưỡng cao cấp Sapa",
    location: "Sapa, Lào Cai",
    type: "heating",
    image: "/images/projects/sapa-heating-01.jpg",
    images: [
      "/images/projects/sapa-heating-01.jpg",
      "/images/projects/sapa-heating-02.jpg"
    ],
    description: "Mạng lưới sưởi sàn thủy lực nước nhiệt PE-Xa Swiss Schweizer tản hơi ấm dồi dào dập tan sương mây buốt âm tảng Sapa.",
    specs: [
      { label: "Khái quát công trình", value: "Dinh biệt thự bám sườn đồi phủ tuyết sương lạnh thấu, cần dải sưởi tỏa hơi ấm dào ấm mát tự nhiên, sấy ráo ẩm mốc nệm drap tủ gỗ ẩm ướt." },
      { label: "Loại hình", value: "Biệt thự đồi sương Sapa" },
      { label: "Quy mô", value: "2 tầng sử dụng gỗ cao, diện tích sàn sưởi ấm 220m²" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Bản Tả Van, Sapa, Lào Cai" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Sưởi sàn thủy lực tản nước tuần PE-Xa Thụy Sĩ quấn rải phẳng liền bê lớp phủ thạch gỗ" }
    ],
    highlights: [
      "CÁC MODULE: Khớp Heat Pump tạo nhiệt âm sâu, Manifold chia phân lộ tự van dạt điện thông, PE-Xa suisse liên tơ.",
      "TIÊU CHUẨN: Mặt sưởi nện gỗ dầy ấm duy trì 26 độ sấy ráo không thở ráp khó thở màng mũi trẻ.",
      "TIÊU CHUẨN: Kiểm rò áp ngập ròng 8 bar trước móng sấy, dung sấy glyco đông dính chống nứt tắc ống mùa đóng máy đông lạnh dốc.",
      "TIÊU CHUẨN: Van điều tiết dải thông dộng mượt độc lộ hoàn khép từng tầng hầm."
    ]
  },
  {
    id: "proj_new17",
    title: "Biệt thự đơn lập Gamuda City",
    location: "Hoàng Mai, Hà Nội",
    type: "filtration",
    image: "/images/projects/gamuda-filtration-01.jpg",
    images: [
      "/images/projects/gamuda-filtration-01.jpg",
      "/images/projects/gamuda-filtration-02.jpg"
    ],
    description: "Trọng thể lắp hệ lọc thô carbon trao ion natri Clack xử dứt mù vàng phèn bẩn canxi vùng lòng hồ đô thị Yên Sở.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt thự bám mép hồ chịu chỉ số canxi làm cứng dột và clo hôi thối, sen inox han loang lổ vết dầu bít tắc ống dạt nóng." },
      { label: "Loại hình", value: "Biệt thự đơn lập phố thị hiện đại" },
      { label: "Quy mô", value: "4 tầng, tum kỹ sàn, trạm đun tum tum tum" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Khu đô thị Gamuda City, Yên Sở, Hoàng Mai, Hà Nội" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Hệ Composite sợi thạch cát + Cột cation trao ion Clack Mỹ" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Đầu cột lọc inox chốt, Composite đúc chịu bức nhiệt, Cốc muối hạt, Van gạt tự súc rảnh tay.",
      "TIÊU CHUẨN: Nước sau rửa đạt dải mềm canxi chuẩn da trẻ láng mềm mịn không mụn mốc chân.",
      "TIÊU CHUẨN: Tuyến ống chậu inox sen vòi Grohe bền sáng soi rọi mặt gương không mốc thếch.",
      "TIÊU CHUẨN: Chỉ tự tái sặc muối theo dòng m định sẵn, cắt bảo trì người làm tay mệt."
    ]
  },
  {
    id: "proj_new18",
    title: "Biệt thự Đảo Ecopark Grand 2",
    location: "Văn Giang, Hưng Yên",
    type: "all-in-one",
    image: "/images/projects/ecopark-island2-01.jpg",
    images: [
      "/images/projects/ecopark-island2-01.jpg",
      "/images/projects/ecopark-island2-02.jpg"
    ],
    description: "Kiến tạo trạm tích hợp tối vẹn vương gia gồm siêu lọc sợi rỗng UF, mềm ion Clack xịn, sưởi thủy Hydronic và Heat Pump đun hồi nhanh dội.",
    specs: [
      { label: "Khái quát công trình", value: "Dinh thự đảo siêu lâu đài, yêu cầu hệ giải pháp nước sưởi lọc tuần vẹn dạt dào êm ức mượt mà không vết lợn lợn gợn." },
      { label: "Loại hình", value: "Dinh thự sang rộng đảo luxury" },
      { label: "Quy mô", value: "3 tầng nổi rộng 650m², 8 cabin sảnh sục bồn sưởi sấy bê 220m²" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân Thượng lưu" },
      { label: "Địa chỉ", value: "Dinh thự Ecopark Grand The Island, Văn Giang, Hưng Yên" },
      { label: "Hệ nước nóng", value: "Heat Pump Inverter 6HP song sụt + bồn bảo ôn bông PU tráng men 500L hồi tốc dội" },
      { label: "Hệ lọc nước", value: "Lọc trạm Clack muối kép + siêu lọc UF 0.01 micron loại trong" },
      { label: "Hệ sưởi sàn", value: "Sưởi nền bê thủy tự động PE-Xa âm sảnh mượt kết nối Manifold đa van điện" }
    ],
    highlights: [
      "CÁC MODULE: Tủ tích hợp đa kênh LCD, Bơm sưởi sấy Inverter, Cột tinh lọc sợi rỗng cao cấp, Manifold van rơle rà dải.",
      "TIÊU CHUẨN: Nền gỗ ấm êm 25-27 độ sấy sạch sẽ mốc nồm, dứt mùi tanh sàn thảm tơ nhà kTS sang.",
      "TIÊU CHUẨN: Sen tắm mở tắm có nước ấm sướng ngay dào dạt dưới 2 giây tức thời dại.",
      "TIÊU CHUẨN: Chỉ số tơ nước gội mềm da chống gãy rụng gầu sành mượt bậc nhất."
    ]
  },
  {
    id: "proj_new19",
    title: "Villa sườn đồi Lương Sơn Hòa Bình",
    location: "Lương Sơn, Hòa Bình",
    type: "heating",
    image: "/images/projects/hoabinh-heating-01.jpg",
    images: [
      "/images/projects/hoabinh-heating-01.jpg",
      "/images/projects/hoabinh-heating-02.jpg"
    ],
    description: "Tổ hợp trạm sưởi Hydronic nền dầm bê thủy PE-Xa swiss sấy nồm, giữ mặt sàn gỗ hoàn trần ráo mát lịm bất chấp mưa lũ núi Hòa Bình ẩm xối.",
    specs: [
      { label: "Khái quát công trình", value: "Căn villa đồi cỏ chịu khí hậu thung lũng ẩm bốc, thâu m thâu mùa đông mốc ngập phồng vồng sàn gỗ bốc mùi mốc bẩn dột dai dẳng." },
      { label: "Loại hình", value: "Villa đồi rẫy cỏ nghỉ ngoại" },
      { label: "Quy mô", value: "2 tầng sàn sử dụng dầy nghệ thuật, diện sưởi dầm phủ 190m²" },
      { label: "Chủ đầu tư", value: "Khách hàng cá nhân" },
      { label: "Địa chỉ", value: "Khu biệt thự đồi Lương Sơn, Hòa Bình" },
      { label: "Hệ nước nóng", value: "Không triển khai" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Sưởi sàn tuần bê PE-Xa swiss bọc nhôm chống dột dầm tản sấy mượt" }
    ],
    highlights: [
      "CÁC MODULE: Bơm nhiệt chuyên sấy đất, Cầu chia Manifold inox rà van lẫy điện tự thông hầm, van dạt phòng.",
      "TIÊU CHUẨN: Khởi động sấy sàn rút sạch nước nồm hơi nồm phẳng phiu 100% trong dải nồm ẩm ròng rã.",
      "TIÊU CHUẨN: Tiết điện năng tối ưu nhờ COP bơm nhiệt xấp xỉ 4.3 dạt chuẩn xanh sinh thái.",
      "TIÊU CHUẨN: Chạm màn LCD thông hiển gỡ vận gạt dễ dàng cho bô lão phụ nũ."
    ]
  },
  {
    id: "proj_new20",
    title: "Biệt thự Splendora An Khánh",
    location: "Hoài Đức, Hà Nội",
    type: "hotwater",
    image: "/images/projects/splendora-hotwater-01.jpg",
    images: [
      "/images/projects/splendora-hotwater-01.jpg",
      "/images/projects/splendora-hotwater-02.jpg"
    ],
    description: "Hệ Heat Pump nước nóng hồi điều phối giờ dùng cài sẵn thông minh, đảm bảo tiện ích đẳng cấp dạt áp lực cho song biệt thự song lập.",
    specs: [
      { label: "Khái quát công trình", value: "Biệt song trục đứng dắt vòi sen xa tít tum hẹp, mở nước lạnh tháo bỏ lâu thê lương lạnh lẽo, thiết nâng bù nhiệt tuần mượt dắt vòi." },
      { label: "Loại hình", value: "Biệt thự song lập hoàn mỹ" },
      { label: "Quy mô", value: "3 tầng nổi hiện đại, 4 toilet phòng sục bồn áp" },
      { label: "Chủ đầu tư", value: "Cư dân cá nhân" },
      { label: "Địa chỉ", value: "KĐT Bắc An Khánh Splendora, Hoài Đức, Hà Nội" },
      { label: "Hệ nước nóng", value: "Heat Pump sưởi Inverter đun nhanh hồi + bồn bảo ôn PU dệt men 300L chịu lực + bơm hồi nén mượt tự ngắt" },
      { label: "Hệ lọc nước", value: "Không triển khai" },
      { label: "Hệ sưởi sàn", value: "Không triển khai" }
    ],
    highlights: [
      "CÁC MODULE: Block Heat Pump Thụy Điển chịu tải dầy, bồn men thép lót súng nén, bơm hồi Grundfos bù áp.",
      "TIÊU CHUẨN: Mở vòi gạt tắm ấm ngay lập tức dưới 3 giây ròng bất kỳ đêm khuya mưa tuyết bão bùng.",
      "TIÊU CHUẨN: Đồng bộ rơle tắt mở bơm hồi theo đúng dải dải giờ sinh hoạt cao điểm sáng tối gia quy.",
      "TIÊU CHUẨN: Tuyến ống bọc bông bảo ôn dầy dặn chôn tường trục dọc cực khép kín vách gạch thô."
    ]
  }
];

export const viProjects: Project[] = [...originalViProjects, ...viAdditionalProjects];

const originalEnProjects: Project[] = [{id:"proj1",title:"Lien Chieu Vacation Villa - Dan Nang",location:"Lien Chieu, Dan Nang",type:"hotwater",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",images:["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"],description:"WWCo upgraded the central hot water system from localized direct electric heaters to a centralized Heat Pump paired with thermal storage, securing stable hot water across multiple bathrooms and usage zones concurrently.",specs:[{label:"Core Equipment",value:"Inverter Heat Pump and insulated thermal storage tank"},{label:"Scale",value:"5-bedroom beach-front vacation villa"},{label:"Benefit",value:"Seamless hot water supply, slashing energy utility by 75%"}],highlights:["Fully replaced inefficient and unsafe local tank water heaters.","Configured insulated return flow routes for instant dynamic output pressure.","Prudently optimized mechanical loops to contain system thermal loss."]},{id:"proj2",title:"Vinhomes Riverside Semi-Detached Villa",location:"Long Bien, Hanoi",type:"hotwater",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",description:"Designed a central hot water system for a multi-level villa, integrating an active circulation loop to minimize delay times at bathrooms furthest from the technical room.",specs:[{label:"Scale",value:"Semi-detached villa (3 levels, 1 basement)"},{label:"Solution",value:"Smart circulation controller scheduled to occupancy times"},{label:"Piping Network",value:"High-temperature resistant lines with heavy outer insulation wrappers"}],highlights:["Reduced wait times for hot supply at furthest shower points to under 3 seconds.","Aligned mechanical pathways cleanly along structural MEP risers without chasing beams.","Balanced dual-pressure loops to ensure uniform delivery during multi-point use."]},{id:"proj3",title:"Ecopark Premium Villa - Hung Yen",location:"Van Giang, Hung Yen",type:"hotwater",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",description:"Deployed a high-efficiency Heat Pump system combined with a large thermal expansion tank, catering to the continuous hot water requirements of the master bath, kids' rooms, kitchen, and laundry utility.",specs:[{label:"Configuration",value:"Inverter Heat Pump with a 400L vitreous thermal buffer"},{label:"Water Demand",value:"Supports 4 showers, deep master tub, kitchen, and laundry simultaneously"},{label:"Security Guard",value:"Prescribed pressure safety valve integrated directly to drain drop lines"}],highlights:["Strict hydraulic volume calculations optimized multi-tier supply feeds.","Inner enameled storage tank lines keep overall warm water pure.","Formed PE insulation casings wrap physical feeds to eliminate structural micro-heats."]},{id:"proj4",title:"Ciputra Urban Villa - Hanoi",location:"Tay Ho, Hanoi",type:"filtration",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",description:"WWCo designed a whole-house water filtration system including sediment extraction, active carbon, and softening, boosting household water quality and safeguarding luxury bathroom appliances.",specs:[{label:"Core Module",value:"Multi-stage automated media filter with built-in softening media"},{label:"Function",value:"Neutralizes mineral scale, absorbs chlorine odors, and traps micro-sands"},{label:"Tonnage Capacity",value:"Prudent 3.0 m³/hour continuous filtration flow"}],highlights:["Stopped calcium scale residues from building up on high-end Grohe fittings.","Automated backwashing schedule based on actual computed volumetric gallons.","Secured absolute compliance with top tier municipal water quality limits."]},{id:"proj5",title:"Tay Ho Luxury Townhouse",location:"Tay Ho, Hanoi",type:"filtration",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",description:"The whole-house filtration array is arranged in a dedicated engineering space, clarifying raw municipal supply prior to distributing to all household points, prioritizing stable runs and easy servicing.",specs:[{label:"System Position",value:"Covered, well-vented rooftop mechanical room"},{label:"Casing Layout",value:"Orthogonal heavy-duty SUS304 structural skeleton frameset"},{label:"Auxiliary Kit",value:"Variable-frequency inverter pumps ensuring seamless feed delivery"}],highlights:["Compact footprint layout guarantees access paths for routine service checks.","Dampened inline vibration loops protect structural frames from backwash noise transfers.","High-density media ensures long-term purity of water."]},{id:"proj6",title:"Soc Son Hillside Villa",location:"Soc Son, Hanoi",type:"filtration",image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",description:"WWCo surveyed source water constituents on-site to build a custom filtration configuration matched to actual water parameters, achieving a reliable and safe domestic supply.",specs:[{label:"Water Parameters",value:"Metropolitan feed with shifting hardness indexes"},{label:"Engineering Fit",value:"Multi-layer fiberglass-reinforced media filter vessels"},{label:"Servicing",value:"Intelligent heads perform backwash routines autonomously"}],highlights:["Achieved absolute extraction of incoming chlorine odors.","Protected plumbing lines inside walls from lime clogs.","Aligned secondary gravity feeds securely on central buffering tanks."]},{id:"proj7",title:"Tam Dao Vacation Villa",location:"Tam Dao, Vinh Phuc",type:"heating",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",description:"WWCo designed and implemented a hydronic underfloor heating system for the living area, bedrooms, and retreat spaces, conveying an even, tranquil thermal wrap during chilly winter months.",specs:[{label:"Architecture",value:"Underfloor hydronic warm-water circulation (Hydronic)"},{label:"Scope Size",value:"220 sqm subfloor heating coverage"},{label:"Running Temps",value:"Delivers pleasant 24°C - 28°C surface contact touchpoints"}],highlights:["Does not dry the skin or create forced air dust circulations like standard ACs.","Laid 100% continuous oxygen-barrier PE-Xa tubes underneath without any joints.","Controlled independent temperature profiles using multi-zone manifold valves."]},{id:"proj8",title:"Ba Vi Forest Retreat Villa",location:"Ba Vi, Hanoi",type:"heating",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",description:"We integrated an underfloor hydronic warming grid fully synchronized with energy pumps, smart manifolds, subfloor PE-Xa tubing, and localized smart thermostat controls.",specs:[{label:"Heater Unit",value:"Dedicated high-efficiency hydronic heat pump setup"},{label:"Layout Elements",value:"Oxygen-barrier oxygen-tight radiant floor warming pipes"},{label:"Manifolds",value:"Electro-thermal smart manifolds with dedicated motorized loops"}],highlights:["Zoned individual heating comfort across 4 master bedrooms and common spaces.","Rigidly tested hydronic systems before pouring the final slab.","Optimized electrical efficiency throughout the sub-alpine winter."]},{id:"proj9",title:"Vinhomes Ocean Park Luxury Villa",location:"Gia Lam, Hanoi",type:"all-in-one",image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",description:"WWCo deployed a synchronized suite containing central hot water, whole-house water filtration, and active hot return circulation loops, yielding a highly stable, premium, and easy-to-maintain water network.",specs:[{label:"Scope",value:"Integrated whole-house softeners, high-flow Heat Pumps, and return regulators"},{label:"Mechanical Space",value:"Clean multi-unit arrangement secured within steel structural framework"},{label:"Aesthetic Design",value:"Orthogonal runs bound with neat insulation coverings"}],highlights:["Water softened and chemical free right at the domestic boundary entry.","Instant warm water instantly available at every fixture across the mansion.","Clutter-free control rooms that visualize current settings straightforwardly."]},{id:"proj10",title:"Hanoi Luxury Penthouse",location:"Ba Dinh, Hanoi",type:"all-in-one",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",description:"Consulted and designed comprehensive water systems for a boutique penthouse estate, bundling central hot water, filtration, and layout modifications to fit within highly compact engineering spaces.",specs:[{label:"Property Scale",value:"Double-volume sky mansion (280 sqm)"},{label:"Constraints",value:"Compact technical balcony limits, structural weight constraints"},{label:"Solution Design",value:"Slim vertical Heat Pump paired with compact multi-barrier filtration vessels"}],highlights:["Configured custom footprints matching tight residential balcony provisions.","Acoustic rubber isolation dampers completely eliminate running mechanical vibrations.","Provides excellent softened domestic water and swift hot water supply lines."]},{id:"proj11",title:"Coastal Boutique Resort",location:"Hoi An, Quang Nam",type:"all-in-one",image:"https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",description:"Designed commercial central hot water and whole-property water softeners for a seaside resort, prioritizing guaranteed high-volume flow during peak occupancy and simplified central maintenance.",specs:[{label:"Property Segment",value:"Bulk supply grid covering 10 seaside VIP bungalows"},{label:"Technical Pivot",value:"Commercial sizing Heat Pumps with fast-circulating recovery vessels"},{label:"Climatic Shielding",value:"Anti-corrosion marine-coated components and salt-resistant housings"}],highlights:["Stable thermal volume secured regardless of sudden occupancy rushes at night.","Optimized return line loops with automated thermo-cycle balancing switches.","Uncomplicated maintenance access nodes for routine media flushing and servicing."]},{id:"proj12",title:"Dai Lai Lakeview Villa",location:"Phuc Yen, Vinh Phuc",type:"all-in-one",image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",description:"WWCo coordinated during the architectural schematics phase to optimize structural plant spaces, flow lines, whole-house filtration hubs, and hot water units matching the mansion's operations.",specs:[{label:"Early Alignment",value:"Technical coordination with builders and onsite MEP teams from rough-ins"},{label:"Integration",value:"Central Heatpump + Multi-bed softeners + Underfloor heating layers"},{label:"Plant Footprint",value:"Bespoke plant bed design optimized within technical basement spaces"}],highlights:["Completely eliminated beam conflicts and overlapping utility lines.","Built resilient mechanical layouts allowing easy routine cartridge swaps.","Delivered exhaustive as-built mechanical documentation to the property owners."]}];

const enAdditionalProjects: Project[] = [
  {
    id: "proj_vinhomes_riverside",
    title: "Vinhomes Riverside Single-Family Villa",
    location: "Long Bien, Hanoi",
    type: "hotwater",
    image: "/images/projects/vinhomes-riverside-single-01.jpg",
    images: [
      "/images/projects/vinhomes-riverside-single-01.jpg",
      "/images/projects/vinhomes-riverside-single-02.jpg",
      "/images/projects/vinhomes-riverside-single-03.jpg",
      "/images/projects/vinhomes-riverside-single-04.jpg"
    ],
    description: "Designed a central hot water system for a multi-story villa, featuring a thermal storage cylinder and an active circulation pump to minimize hot water delay times at remote bathrooms.",
    specs: [
      { label: "Overview", value: "Single-family villa with multiple bathrooms requiring uniform hot water feed pressure and optimized standby temperature loops." },
      { label: "Type", value: "Villa / Single-Family Estate" },
      { label: "Scale", value: "3 stories plus basement, 6 guest bathrooms" },
      { label: "Client", value: "Private Owner" },
      { label: "Location", value: "Long Bien, Hanoi" },
      { label: "Hot Water System", value: "Central Heat Pump + Thermal buffering cylinder + Active recirculation" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Thermodynamic Heat Pump block, Insulated buffer tank, Return hydronic lines, Control manifold.",
      "STANDARDS: Hot water arrives at the most distant tap in less than 3 seconds.",
      "STANDARDS: Synchronized state-of-the-art piping systems to reduce temperature leakage.",
      "STANDARDS: Provided comprehensive user manuals and configured automated scheduled maintenance runs."
    ]
  },
  {
    id: "proj_ecopark_grand",
    title: "Ecopark Grand Island Villa",
    location: "Van Giang, Hung Yen",
    type: "all-in-one",
    image: "/images/projects/ecopark-complete-01.jpg",
    images: [
      "/images/projects/ecopark-complete-01.jpg",
      "/images/projects/ecopark-complete-02.jpg",
      "/images/projects/ecopark-complete-03.jpg",
      "/images/projects/ecopark-complete-04.jpg"
    ],
    description: "A comprehensive all-in-one solution combining central hot water, point-of-entry water filtration, and active recirculation plumbing for maximum efficiency and absolute safety.",
    specs: [
      { label: "Overview", value: "Premium island villa requiring high-level domestic water softening and dynamic constant-pressure hot water return lines." },
      { label: "Type", value: "Premium Island Villa / Mansion" },
      { label: "Scale", value: "3 stories, 500 sqm floor area" },
      { label: "Client", value: "Private Client" },
      { label: "Location", value: "Ecopark Grand Island Villa Zone, Hung Yen" },
      { label: "Hot Water System", value: "Inverter Heat Pump + 500L storage buffer + Smart cycle pumps" },
      { label: "Water Filtration", value: "Multi-stage whole-house filtration and ion-exchange softening" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Central Thermodynamics unit, Point-of-entry multi-bed media filter, Dynamic return pumps.",
      "STANDARDS: Eliminates residual chlorine, calcium scale building, and floating micro-sediments.",
      "STANDARDS: Warm water circulating immediately at all faucets in under 3 seconds.",
      "STANDARDS: Self-regenerates filtration media based on actual measured flow volumes."
    ]
  },
  {
    id: "proj_dailai_heating",
    title: "Dai Lai Lakeside Vacation Villa",
    location: "Phuc Yen, Vinh Phuc",
    type: "heating",
    image: "/images/projects/dailai-heating-01.jpg",
    images: [
      "/images/projects/dailai-heating-01.jpg",
      "/images/projects/dailai-heating-02.jpg",
      "/images/projects/dailai-heating-03.jpg"
    ],
    description: "Built an integrated hydronic floor warming network engineered for harsh mountain winter peaks, with localized smart zoning thermostat controls.",
    specs: [
      { label: "Overview", value: "Lakeside luxury villa experiencing shivering damp winter sags, requiring healthy radiant heat patterns." },
      { label: "Type", value: "Lakeside Resort / Vacation Manor" },
      { label: "Scale", value: "2 stories, 250 sqm radiant heating footprint" },
      { label: "Client", value: "Private Owner" },
      { label: "Location", value: "Dai Lai Eco-Resort, Phuc Yen, Vinh Phuc" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Hydronic subfloor network utilizing Swiss PE-Xa lines with oxygen-barrier" }
    ],
    highlights: [
      "MODULES: Hydronic Heat Pump, Stainless steel manifold cupboard, In-floor loop circuits.",
      "STANDARDS: Mild upward heat envelope keeps skin hydrated and prevents air-blown irritants.",
      "STANDARDS: Maintained continuous 8-bar pressure test verification for 48 hours before pouring slab screeds.",
      "STANDARDS: Independent room-by-room thermal regulators allow targeted temperature setups."
    ]
  },
  {
    id: "proj_tayho_filtration",
    title: "Tay Ho Central Filtration Villa",
    location: "Tay Ho, Hanoi",
    type: "filtration",
    image: "/images/projects/tayho-filtration-01.jpg",
    images: [
      "/images/projects/tayho-filtration-01.jpg",
      "/images/projects/tayho-filtration-02.jpg",
      "/images/projects/tayho-filtration-03.jpg"
    ],
    description: "Installed a point-of-entry multi-stage central water filter featuring ion-exchange softeners to protect premium sanitary fixtures and scale-sensitive fittings.",
    specs: [
      { label: "Overview", value: "Urban single-family villa with luxury polished metallic faucets requiring systematic lime softening to protect sanitary finishes." },
      { label: "Type", value: "Single-Family Urban Villa" },
      { label: "Scale", value: "4 stories, peak capacity up to 4.0 m³/hour" },
      { label: "Client", value: "Private Client" },
      { label: "Location", value: "Starlake Township, Tay Ho West, Hanoi" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Multi-parameter media filters + carbon bed + Clack ion-exchange softener" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Reinforced SUS304 structural support, Clack valve assemblies, Heavy-duty filter vessels.",
      "STANDARDS: Supplies crystal clear, odorless softened water, neutralizing aggressive chlorine.",
      "STANDARDS: Maximizes runtime longevity of Hansgrohe bathroom amenities by preventing scale stains.",
      "STANDARDS: Programmed self-washing cycles using high-grade pellet salt reserves on schedule."
    ]
  },
  {
    id: "proj_metropolis_penthouse",
    title: "Vinhomes Metropolis Duplex Penthouse",
    location: "Ba Dinh, Hanoi",
    type: "all-in-one",
    image: "/images/projects/metropolis-penthouse-01.jpg",
    images: [
      "/images/projects/metropolis-penthouse-01.jpg",
      "/images/projects/metropolis-penthouse-02.jpg"
    ],
    description: "Custom engineered high-efficiency compact multi-stage filters with a vertical slim-profile Heat Pump tailored to tight apartment utility spaces.",
    specs: [
      { label: "Overview", value: "Luxury double-deck sky condo demanding ultra-silent operation, zero slab weight stresses, and premium balconies optimization." },
      { label: "Type", value: "Luxury Double-Story Penthouse" },
      { label: "Scale", value: "350 sqm useful area, 5 premium bathrooms" },
      { label: "Client", value: "Private Owner" },
      { label: "Location", value: "Vinhomes Metropolis, Lieu Giai, Ba Dinh, Hanoi" },
      { label: "Hot Water System", value: "Slim-line vertical Heat Pump + space-saving flat buffer vessel" },
      { label: "Water Filtration", value: "Compact UF membrane filtration + space-optimized Clack Softener vessel" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Vertical-profile thermodynamic block, compact resin vessel, vibro-damper mounting frameset.",
      "STANDARDS: Sub-30dB running noise limits guarantee tranquil rest cycles in master suites.",
      "STANDARDS: High-flow rates comfortably feed deep jacuzzi bathtubs simultaneously.",
      "STANDARDS: Rigid powder-coated enclosure case safeguards components while matching balcony looks."
    ]
  },
  {
    id: "proj_tamdao_manor",
    title: "Tam Dao Hillside Manor",
    location: "Tam Dao, Vinh Phuc",
    type: "all-in-one",
    image: "/images/projects/tamdao-heating-hotwater-01.jpg",
    images: [
      "/images/projects/tamdao-heating-hotwater-01.jpg",
      "/images/projects/tamdao-heating-hotwater-02.jpg",
      "/images/projects/tamdao-heating-hotwater-03.jpg"
    ],
    description: "A high-performance system for both whole-house central hot water and cozy hydronic underfloor heating, defying damp alpine winters.",
    specs: [
      { label: "Overview", value: "Hillside luxury villa suffering severe mountain winter drops, requiring cozy subfloor warmth and massive hot water reservoirs." },
      { label: "Type", value: "Hillside Vacation Manor" },
      { label: "Scale", value: "3 split-levels, 300 sqm hydronic floor warming area" },
      { label: "Client", value: "Private Client" },
      { label: "Location", value: "Tam Dao Golf & Resort Zone, Vinh Phuc" },
      { label: "Hot Water System", value: "Multi-function Heat Pump + 500L double-layered thermal tank" },
      { label: "Water Filtration", value: "Multi-media sediment filters with backwash functions" },
      { label: "Underfloor Heating", value: "Hydronic floor warming loop utilizing Swiss PE-Xa oxygen-barrier pipelines" }
    ],
    highlights: [
      "MODULES: Dual-compressor Heat Pump, Flow manifold, continuous cross-linked PE-Xa lines under screed.",
      "STANDARDS: Sustains cozy floor touch temperature profile of 24°C - 28°C under bare feet.",
      "STANDARDS: Active return loops guarantee steamy showers while drying up sub-floor moisture during nồm seasons.",
      "STANDARDS: Machine setup vibration insulation eliminates any structure-borne hums."
    ]
  },
  {
    id: "proj_ciputra_castle",
    title: "Ciputra Castle Mansion",
    location: "Tay Ho, Hanoi",
    type: "all-in-one",
    image: "/images/projects/ciputra-allinone-01.jpg",
    images: [
      "/images/projects/ciputra-allinone-01.jpg",
      "/images/projects/ciputra-allinone-02.jpg",
      "/images/projects/ciputra-allinone-03.jpg"
    ],
    description: "An expansive all-in-one architecture bundling multi-bed central water softening with heavy-duty thermodynamic Heat Pump generation.",
    specs: [
      { label: "Overview", value: "Large neoclassical palace mansion with high-volume load requirements, demanding peak performance filtration and fast hot water." },
      { label: "Type", value: "Palace Manor / Chateau" },
      { label: "Scale", value: "4 stories, basement floor, 8 full guest suites, outdoor plunge pool" },
      { label: "Client", value: "Elite Client" },
      { label: "Location", value: "Ciputra International City, Hanoi" },
      { label: "Hot Water System", value: "Heavy-duty 8HP thermodynamics unit + 1000L glass-lined thermal storage" },
      { label: "Water Filtration", value: "Automated dual-tank Clack softeners operating in continuous parallel" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Multi-chamber Clack filtration systems, variable inverter pump array, return thermal controllers.",
      "STANDARDS: Ensures high water pressure for multi-shower overhead rain heads synchronously.",
      "STANDARDS: Outgoing softened water conforms strictly with top laboratory bio-purity guidelines.",
      "STANDARDS: Full-featured relay central alert cupboard automatically notifies scheduled cartridge cycles."
    ]
  },
  {
    id: "proj_gamuda_gardens",
    title: "Gamuda Gardens Single Villa",
    location: "Hoang Mai, Hanoi",
    type: "hotwater",
    image: "/images/projects/gamuda-hotwater-01.jpg",
    images: [
      "/images/projects/gamuda-hotwater-01.jpg",
      "/images/projects/gamuda-hotwater-02.jpg"
    ],
    description: "A fast-recovery thermodynamic Heat Pump system with a high-capacity insulated storage buffer designed for high-flow overhead rain showers.",
    specs: [
      { label: "Overview", value: "Rebuilt MEP infrastructure for a villa with weak hot water flow, upgrading to high-delivery performance pipelines." },
      { label: "Type", value: "Villa / Single-Family Detached Manor" },
      { label: "Scale", value: "3.5 stories, 5 full shower bathrooms with heavy-volume rain shower heads" },
      { label: "Client", value: "Private Owner" },
      { label: "Location", value: "Gamuda Gardens, Hoang Mai, Hanoi" },
      { label: "Hot Water System", value: "Inverter Heat Pump + 400L reinforced insulated buffer + active return" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Heat Pump block, high-pressure insulated tank, automated scheduled return pumps.",
      "STANDARDS: Heavy-capacity flow rates keep up with large rain showers across 24 hours.",
      "STANDARDS: PPR pipeline wrapped with industrial thermal insulation jacket layer.",
      "STANDARDS: Aligned electrical console box safeguards against voltage spikes."
    ]
  },
  {
    id: "proj_bacninh_garden",
    title: "Vinhomes Bac Ninh Garden Villa",
    location: "Bac Ninh City, Bac Ninh",
    type: "filtration",
    image: "/images/projects/bacninh-filtration-01.jpg",
    images: [
      "/images/projects/bacninh-filtration-01.jpg",
      "/images/projects/bacninh-filtration-02.jpg"
    ],
    description: "Whole-house point-of-entry multi-stage filtration to eliminate visual calcium crusts on luxury brassware and prevent pipe corroding.",
    specs: [
      { label: "Overview", value: "Garden villa suffering yellow rust, suspended sands and elevated water hardness indicators clogging hot water lines." },
      { label: "Type", value: "Detached Garden Villa" },
      { label: "Scale", value: "3 stories, output filtration rating 2.5 m³/hour" },
      { label: "Client", value: "Private Client" },
      { label: "Location", value: "Vinhomes Subdivision, Bac Ninh City" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Coarse media filters + carbon bed + Clack softening exchange vessel" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Quartz sand media tubes, active carbon vessel, salt-brine softening chamber, SUS304 frames.",
      "STANDARDS: Crystal clear, chlorine-free polished softened water flow.",
      "STANDARDS: Protects premium Grohe chrome fittings from dull scale stains permanently.",
      "STANDARDS: Auto-timer valve schedules salt brine media cleans silently without intervention."
    ]
  },
  {
    id: "proj_bavi_sanctuary",
    title: "Ba Vi Hillside Sanctuary",
    location: "Ba Vi, Hanoi",
    type: "heating",
    image: "/images/projects/bavi-heating-01.jpg",
    images: [
      "/images/projects/bavi-heating-01.jpg",
      "/images/projects/bavi-heating-02.jpg",
      "/images/projects/bavi-heating-03.jpg"
    ],
    description: "Premium hydronic radiant subfloor heating using high-grade oxygen-barrier tubes, conveying draft-free and natural warmth.",
    specs: [
      { label: "Overview", value: "Remote hillside vacation villa facing bone-chilling winter winds and severe spring moisture levels, needing natural radiant heating." },
      { label: "Type", value: "Hillside Vacation Villa" },
      { label: "Scale", value: "Single-level open-plan layout, 180 sqm underfloor heating area" },
      { label: "Client", value: "Private Client" },
      { label: "Location", value: "Ba Vi National Park zone, Hanoi Outskirts" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Closed-loop hydronic floor warming network with Swiss PE-Xa oxygen-barrier pipelines" }
    ],
    highlights: [
      "MODULES: Thermodynamic heating block, multi-port flow manifolds, Swiss PE-Xa subfloor loops.",
      "STANDARDS: Radiant warmth wraps from bottom up, eliminating typical allergies from HVAC air blowing.",
      "STANDARDS: Maintained strict 8-bar pressure test for 48 hours before screeding.",
      "STANDARDS: Automated relay controllers cut off circulation when reaching desired comfort bands."
    ]
  },
  {
    id: "proj_new11",
    title: "Vinhomes Green Bay Nam Tu Liem Villa",
    location: "Nam Tu Liem, Hanoi",
    type: "all-in-one",
    image: "/images/projects/vinhomes-greenbay-01.jpg",
    images: [
      "/images/projects/vinhomes-greenbay-01.jpg",
      "/images/projects/vinhomes-greenbay-02.jpg"
    ],
    description: "Dynamic integration of whole-house softeners, high-flow Heat Pumps, and smart pool circulation filters for ultimate synchronized comfort.",
    specs: [
      { label: "Overview", value: "Corner villa requiring premium whole-house Softeners, instant hot water loops, and pool circulation filters." },
      { label: "Type", value: "Corner Mansion Villa" },
      { label: "Scale", value: "3 stories plus technical basement, 6 guest bathrooms" },
      { label: "Client", value: "Private VIP Client" },
      { label: "Location", value: "Vinhomes Green Bay, Nam Tu Liem, Hanoi" },
      { label: "Hot Water System", value: "Central Inverter Heat Pump + 500L double-walled thermal cylinder" },
      { label: "Water Filtration", value: "Point-of-entry Clack water filtration + UF membranes" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Heat Pump, Clack USA filtration columns, variable frequency booster pumps.",
      "STANDARDS: Active loops maintain hot water arrival at any tap in under 2 seconds.",
      "STANDARDS: Bio-pure incoming water suitable for skincare and premium bathing.",
      "STANDARDS: Frame-mounted on SUS304 skid to absorb active operational noise."
    ]
  },
  {
    id: "proj_new12",
    title: "Sonasea Van Don Sea-facing Villa",
    location: "Van Don, Quảng Ninh",
    type: "hotwater",
    image: "/images/projects/sonasea-vandon-01.jpg",
    images: [
      "/images/projects/sonasea-vandon-01.jpg",
      "/images/projects/sonasea-vandon-02.jpg"
    ],
    description: "Designed high-output Heat Pumps with seaside corrosion protection to serve large Jacuzzis and showers with salt-resistant housings.",
    specs: [
      { label: "Overview", value: "Coastal villa facing aggressive marine salt environments, requiring durable hot water systems with long-life guarantees." },
      { label: "Type", value: "Sea-front Luxury Villa" },
      { label: "Scale", value: "2 stories, outdoor Jacuzzi system" },
      { label: "Client", value: "Private Client" },
      { label: "Location", value: "Sonasea Van Don Harbor City, Quang Ninh" },
      { label: "Hot Water System", value: "Seaside-treated Heat Pump block + SUS316L buffer cylinder" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Salt-resistant Heat Pump compressor, Inox 316 storage buffer, marine-grade brass valves.",
      "STANDARDS: Prevents atmospheric salt-corrosion, guaranteeing a 15-year service life.",
      "STANDARDS: Fully heats deep Jacuzzi volumes in under 45 minutes of active recovery.",
      "STANDARDS: Multi-return valves maintain reliable balancing throughout the structure."
    ]
  },
  {
    id: "proj_new13",
    title: "Thao Dien Garden Villa",
    location: "District 2, HCMC",
    type: "filtration",
    image: "/images/projects/thaodien-filtration-01.jpg",
    images: [
      "/images/projects/thaodien-filtration-01.jpg",
      "/images/projects/thaodien-filtration-02.jpg"
    ],
    description: "Multi-stage whole-house filtration resolving suspended sediments and heavy chlorine odors, ensuring soft water for premium bathrooms.",
    specs: [
      { label: "Overview", value: "Luxury Thao Dien estate suffering heavy chlorine smells and turbid municipal pipelines, requiring softened water to protect delicate skin." },
      { label: "Type", value: "Garden Estate Villa" },
      { label: "Scale", value: "3 stories, 3000L rooftop storage buffering" },
      { label: "Client", value: "International Client" },
      { label: "Location", value: "Thao Dien Villa Compound, District 2, HCMC" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Clack USA filtration carbon bed + automatic ion-exchange softeners" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: High-density active carbon module, polymer softening column, Grundfos booster pump.",
      "STANDARDS: Eliminates chlorine odors, yielding pure, mineral-soft water for hair and skin.",
      "STANDARDS: Stops calcium crust build-up on shower glass panes and tiles.",
      "STANDARDS: Automatic valve computes exactly when to clean resin based on volumetric flows."
    ]
  },
  {
    id: "proj_new14",
    title: "Vinhomes Golden River Penthouse",
    location: "District 1, HCMC",
    type: "all-in-one",
    image: "/images/projects/goldenriver-penthouse-01.jpg",
    images: [
      "/images/projects/goldenriver-penthouse-01.jpg",
      "/images/projects/goldenriver-penthouse-02.jpg"
    ],
    description: "Ultra-filtration (UF) and softening system paired with a vertical Heat Pump, designed for high safety and zero balcony noise.",
    specs: [
      { label: "Overview", value: "High-floor luxury penthouse requiring space-saving vertical systems with zero floor block vibration and direct drinkable outlet features." },
      { label: "Type", value: "Elite Sky Mansion Penthouse" },
      { label: "Scale", value: "400 sqm floor area, 6 executive VIP suites" },
      { label: "Client", value: "UHNW Client" },
      { label: "Location", value: "Vinhomes Golden River, District 1, HCMC" },
      { label: "Hot Water System", value: "Compact slim-line vertical Heat Pump + space-optimized flat buffer cylinder" },
      { label: "Water Filtration", value: "Ultra-filtration (UF) hollow fiber membrane + slim-line softening column" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: UF 0.01-micron hollow fiber membranes, custom rectangular softening column, sound-insulated booster pump.",
      "STANDARDS: Outgoing kitchen water complies with direct cup-to-mouth drinkable specifications.",
      "STANDARDS: Noise dampening insulation limits operating noise to a silent, imperceptible hum.",
      "STANDARDS: Seamless custom alloy outer casing nicely complements modern balcony looks."
    ]
  },
  {
    id: "proj_new15",
    title: "Boutique Hotel Hanoi Old Quarter",
    location: "Hoan Kiem, Hanoi",
    type: "hotwater",
    image: "/images/projects/honoicotyc-boutique-01.jpg",
    images: [
      "/images/projects/honoicotyc-boutique-01.jpg",
      "/images/projects/honoicotyc-boutique-02.jpg"
    ],
    description: "High-capacity Heat Pump system for commercial boutique hotel, ensuring stable hot water during peak winter seasons.",
    specs: [
      { label: "Overview", value: "Classic hospitality building with tight rooftop footprints needing steady hot water circulation rates for high-pressure guest suites." },
      { label: "Type", value: "Classic Boutique Hotel" },
      { label: "Scale", value: "6 stories, 20 high-end guest bathrooms" },
      { label: "Client", value: "Boutique Hotel Enterprise" },
      { label: "Location", value: "Hang Be Street, Hoan Kiem, Hanoi" },
      { label: "Hot Water System", value: "Dual thermodynamic commercial-grade compressors + 2000L insulated thermal vessels" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Dual-compressor Heat Pump, high-performance thermal buffer, Grundfos booster pumps.",
      "STANDARDS: High-volume output easily handles 20 showers running concurrently without temperature sags.",
      "STANDARDS: Self-balancing cycles optimize return loop pumps during night hours.",
      "STANDARDS: Structural-acoustic isolation layers absorb structural noise from historical roof slabs."
    ]
  },
  {
    id: "proj_new16",
    title: "Sapa Luxury Mountain Villa",
    location: "Sapa, Lao Cai",
    type: "heating",
    image: "/images/projects/sapa-heating-01.jpg",
    images: [
      "/images/projects/sapa-heating-01.jpg",
      "/images/projects/sapa-heating-02.jpg"
    ],
    description: "Severe-winter underfloor heating system utilizing Swiss-made PE-Xa pipes under thick concrete, conveying warmth against mountain snow.",
    specs: [
      { label: "Overview", value: "Alpine villa baring snow flurries and dense mountain mists, requiring natural subfloor warming networks to dry up room dampness." },
      { label: "Type", value: "Alpine Retreat Villa" },
      { label: "Scale", value: "2 floors, 220 sqm radiant heating footprint" },
      { label: "Client", value: "Private Owner" },
      { label: "Location", value: "Ta Van Village, Sapa, Lao Cai" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Closed radiant heating system utilizing premium Swiss PE-Xa tubes with oxygen-barrier" }
    ],
    highlights: [
      "MODULES: Sub-zero operational Heat Pump, multi-output flow manifolds, premium PE-Xa underfloor loop circuits.",
      "STANDARDS: Subfloor heat is locked at a cozy 26°C, protecting wool carpets from damp mountain rot.",
      "STANDARDS: Systems withstand freezing winter stresses thanks to specialized glycol anti-freeze fluid mixtures.",
      "STANDARDS: Seamless custom manifold boxes tuck neatly into structural timber linings."
    ]
  },
  {
    id: "proj_new17",
    title: "Gamuda City Single Villa",
    location: "Hoang Mai, Hanoi",
    type: "filtration",
    image: "/images/projects/gamuda-filtration-01.jpg",
    images: [
      "/images/projects/gamuda-filtration-01.jpg",
      "/images/projects/gamuda-filtration-02.jpg"
    ],
    description: "Multi-stage whole-house softeners for municipal supply near Yen So lake, removing calcium hardness to protect high-end fittings.",
    specs: [
      { label: "Overview", value: "Lakeside villa experiencing heavy incoming calcium scale values, clogging hot water elements and stain inox taps." },
      { label: "Type", value: "Single-Family Detached Villa" },
      { label: "Scale", value: "4 stories, compact utilities on rooftop plane" },
      { label: "Client", value: "Private Family" },
      { label: "Location", value: "Gamuda City, Yen So, Hoang Mai, Hanoi" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Media vessel + active carbon vessel + Clack ion-exchange softening block" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: SUS304 skid framing, fiberglass-reinforced vessels, brine tank, smart volumetric wash valve.",
      "STANDARDS: Significantly reduces hardness levels to create a silky-smooth bath stream.",
      "STANDARDS: Stops calcium residues on luxury bathrooms fixtures and glass shower doors.",
      "STANDARDS: Automatic valve computes exactly when to clean resin based on volumetric flows."
    ]
  },
  {
    id: "proj_new18",
    title: "Ecopark Grand Island Villa 2",
    location: "Van Giang, Hung Yen",
    type: "all-in-one",
    image: "/images/projects/ecopark-island2-01.jpg",
    images: [
      "/images/projects/ecopark-island2-02.jpg",
      "/images/projects/ecopark-island2-02.jpg"
    ],
    description: "Integrated ultra-filtration, softening, Heat Pump, and hydronic heating, delivering a synchronized water experience.",
    specs: [
      { label: "Overview", value: "Grand estate villa seeking premium water softening, hydronic floor warming, and high-flow central hot water return networks." },
      { label: "Type", value: "Luxury Grand Island Mansion" },
      { label: "Scale", value: "3 levels, 650 sqm floor area, 220 sqm radiant warming beds" },
      { label: "Client", value: "HNW Individual" },
      { label: "Location", value: "Ecopark Grand Island, Hung Yen" },
      { label: "Hot Water System", value: "Premium Inverter Heat Pump + 500L PU-insulated buffer cylinder" },
      { label: "Water Filtration", value: "Dual Clack Softeners running in parallel + 0.01-micron UF ultra-filters" },
      { label: "Underfloor Heating", value: "Hydronic closed-loop underfloor heating quiped with smart manifolds" }
    ],
    highlights: [
      "MODULES: Smart LCD integrated terminal panel, Inverter heating block, point-of-entry Clack softeners, flow manifolds.",
      "STANDARDS: Radiant heating maintains cozy floors, eliminating damp carpet odors in master chambers.",
      "STANDARDS: Active loops keep hot water available at any faucet across the mansion in under 2 seconds.",
      "STANDARDS: Softened, microbiological-safe streams provide outstanding hair and body washing comfort."
    ]
  },
  {
    id: "proj_new19",
    title: "Luong Son Hills Resort Villa",
    location: "Luong Son, Hoa Binh",
    type: "heating",
    image: "/images/projects/hoabinh-heating-01.jpg",
    images: [
      "/images/projects/hoabinh-heating-01.jpg",
      "/images/projects/hoabinh-heating-02.jpg"
    ],
    description: "Underfloor hydronic floor drying and heating system, keeping floors completely dry during damp spring and cozy during winter.",
    specs: [
      { label: "Overview", value: "Holiday villa suffering damp spring seasons, leading to wooden floor warping and persistent mildews." },
      { label: "Type", value: "Hillside Vacation Villa" },
      { label: "Scale", value: "2 stories, 190 sqm radiant heating footprint" },
      { label: "Client", value: "Private Family" },
      { label: "Location", value: "Luong Son Hills, Hoa Binh Province" },
      { label: "Hot Water System", value: "Not deployed" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Premium hydronic radiant loops quiped with Swiss PE-Xa pipes with oxygen-barrier" }
    ],
    highlights: [
      "MODULES: Heat Pump warming block, brass manifolds, electro-thermal loop control valves.",
      "STANDARDS: Provides 100% dry, slide-free floor surfaces during spring humid seasons.",
      "STANDARDS: Highly cost-effective thermal COP rating reaches a super efficient green standard.",
      "STANDARDS: Easy-to-use smart thermostats make settings straightforward for all family members."
    ]
  },
  {
    id: "proj_new20",
    title: "Splendora An Khanh Detached Villa",
    location: "Hoai Đức, Hanoi",
    type: "hotwater",
    image: "/images/projects/splendora-hotwater-01.jpg",
    images: [
      "/images/projects/splendora-hotwater-01.jpg",
      "/images/projects/splendora-hotwater-02.jpg"
    ],
    description: "Heat Pump hot water system with smart timer controls and recirculation loops, optimizing delivery pressure and energy.",
    specs: [
      { label: "Overview", value: "Detached villa with remote guest bathrooms suffering long cold-water waits, upgrading to recirculated pressure systems." },
      { label: "Type", value: "Modern Detached Villa" },
      { label: "Scale", value: "3 stories, 4 full shower bathrooms" },
      { label: "Client", value: "Private Owner" },
      { label: "Location", value: "Splendora Urban Area, Hoai Duc, Hanoi" },
      { label: "Hot Water System", value: "Thermodynamic Heat Pump + 300L PUylinder + Smart return loops" },
      { label: "Water Filtration", value: "Not deployed" },
      { label: "Underfloor Heating", value: "Not deployed" }
    ],
    highlights: [
      "MODULES: Premium thermodynamic block, double-walled glass-lined cylinder, Grundfos return pump.",
      "STANDARDS: Hot water arrives at all taps in less than 3 seconds regardless of cold peaks.",
      "STANDARDS: Programmed cycle timers activate loops only during morning/evening peak hours to save power.",
      "STANDARDS: Polyurethane insulation wraps the long vertical columns within masonry walls."
    ]
  }
];

export const enProjects: Project[] = [...originalEnProjects, ...enAdditionalProjects];

export const viProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Khảo sát hiện trạng & xét nghiệm nước",
    subtitle: "Xác định điều kiện công trình trước khi đề xuất giải pháp kỹ thuật",
    desc: "WWCo khảo sát nguồn nước, vị trí đặt thiết bị, tuyến ống kỹ thuật và nhu cầu sử dụng thực tế để lựa chọn cấu hình phù hợp.",
    detail: [
      "Kiểm tra nguồn nước, bể chứa và vị trí cấp nước đầu vào.",
      "Lấy mẫu kiểm tra cặn, clo dư, độ cứng và TDS.",
      "Làm rõ nhu cầu nước nóng, số phòng tắm, bồn tắm và giờ cao điểm.",
      "Đánh giá vị trí đặt thiết bị và các điểm cần phối hợp với MEP."
    ],
    icon: "ShieldAlert",
    image: "/images/process/step-01-site-survey.jpg",
    imageAlt: "Kỹ thuật viên WWCo khảo sát hiện trạng và xét nghiệm nước tại công trình"
  },
  {
    step: "02",
    title: "Thiết kế nguyên lý & lựa chọn thiết bị",
    subtitle: "Thiết kế hệ thống dựa trên nhu cầu sử dụng và điều kiện vận hành",
    desc: "Từ dữ liệu khảo sát, WWCo xây dựng nguyên lý hệ thống, tính toán lưu lượng, dung tích, công suất và lựa chọn thiết bị phù hợp.",
    detail: [
      "Tính toán nhu cầu sử dụng nước nóng và nước sinh hoạt.",
      "Xác định dung tích bồn, công suất Heat Pump và cấu hình lọc.",
      "Thiết kế sơ đồ nguyên lý cấp – hồi, xả rửa và điều khiển.",
      "Lựa chọn thiết bị theo điều kiện thực tế của công trình."
    ],
    icon: "FileCode2",
    image: "/images/process/step-02-engineering-design.jpg",
    imageAlt: "Kỹ sư WWCo thiết kế nguyên lý hệ nước trung tâm trên bản vẽ kỹ thuật"
  },
  {
    step: "03",
    title: "Chốt phương án & chuẩn bị vật tư",
    subtitle: "Đồng bộ thiết bị, phụ kiện và tiến độ trước khi triển khai",
    desc: "WWCo thống nhất phương án với chủ đầu tư, kiến trúc sư và đội thi công trước khi chuẩn bị thiết bị, vật tư và lịch triển khai.",
    detail: [
      "Thống nhất vị trí thiết bị và tuyến ống kỹ thuật.",
      "Rà soát phụ kiện, van, bơm, tủ điện và vật tư đi kèm.",
      "Kiểm tra model, thông số và tình trạng thiết bị.",
      "Lên kế hoạch giao hàng, lắp đặt và phối hợp công trường."
    ],
    icon: "HardHat",
    image: "/images/process/step-03-material-preparation.jpg",
    imageAlt: "Vật tư và thiết bị hệ nước trung tâm được kiểm tra trước khi triển khai"
  },
  {
    step: "04",
    title: "Phối hợp MEP & hướng dẫn thi công ống chờ",
    subtitle: "Kiểm soát ống chờ, điện, thoát nước và không gian kỹ thuật",
    desc: "WWCo phối hợp với đội MEP để đảm bảo đường ống, điện cấp nguồn, thoát nước và phòng kỹ thuật được chuẩn bị đúng trước khi lắp thiết bị.",
    detail: [
      "Xác định đầu nước cấp, nước nóng, nước hồi và nước sau lọc.",
      "Hướng dẫn vị trí điện nguồn, tủ điện và đường tín hiệu.",
      "Kiểm tra thoát nước xả rửa, xả đáy và van an toàn.",
      "Hạn chế đục phá, sửa đổi sau khi công trình hoàn thiện."
    ],
    icon: "Wrench",
    image: "/images/process/step-04-mep-coordination.jpg",
    imageAlt: "WWCo phối hợp đội MEP kiểm tra tuyến ống chờ và hạ tầng kỹ thuật"
  },
  {
    step: "05",
    title: "Lắp đặt thiết bị, thử áp & chạy thử",
    subtitle: "Lắp đặt đúng kỹ thuật và kiểm tra vận hành trước bàn giao",
    desc: "Đội kỹ thuật WWCo lắp đặt thiết bị, đấu nối hệ thống, thử áp đường ống và chạy thử để kiểm tra khả năng vận hành thực tế.",
    detail: [
      "Lắp đặt Heat Pump, bồn tích nhiệt, hệ lọc, bơm và tủ điện.",
      "Thử áp đường ống và kiểm tra rò rỉ.",
      "Xả rửa, chạy thử và kiểm tra lưu lượng.",
      "Kiểm tra nhiệt độ, áp lực và chu trình vận hành."
    ],
    icon: "Activity",
    image: "/images/process/step-05-installation-testing.jpg",
    imageAlt: "Kỹ thuật viên WWCo lắp đặt, thử áp và chạy thử hệ nước trung tâm"
  },
  {
    step: "06",
    title: "Nghiệm thu, bàn giao & bảo trì định kỳ",
    subtitle: "Bàn giao hệ thống sau kiểm tra và hướng dẫn sử dụng rõ ràng",
    desc: "Sau chạy thử, WWCo nghiệm thu hệ thống, bàn giao hồ sơ kỹ thuật, hướng dẫn sử dụng và thiết lập lịch bảo trì định kỳ.",
    detail: [
      "Nghiệm thu nước nóng, nước lọc, áp lực, lưu lượng và bơm hồi.",
      "Bàn giao sơ đồ nguyên lý, danh mục thiết bị và thông số cài đặt.",
      "Hướng dẫn vận hành cơ bản và các lưu ý an toàn.",
      "Thiết lập lịch bảo trì định kỳ sau bàn giao."
    ],
    icon: "CheckSquare",
    image: "/images/process/step-06-handover-maintenance.jpg",
    imageAlt: "WWCo nghiệm thu, bàn giao và thiết lập lịch bảo trì hệ nước trung tâm"
  }
];

export const enProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Site Survey & Water Testing",
    subtitle: "Determining precise site conditions before technical engineering",
    desc: "WWCo surveys the water source, equipment footprint, piping routes, and peak usage demands to select the optimal configuration.",
    detail: [
      "Inspect source water, tanks, and main supply lines.",
      "Sample water for sediments, chlorine, hardness, and TDS.",
      "Clarify hot water needs, bathroom count, and peak hours.",
      "Evaluate installation footprint and MEP coordination points."
    ],
    icon: "ShieldAlert",
    image: "/images/process/step-01-site-survey.jpg",
    imageAlt: "Kỹ thuật viên WWCo khảo sát hiện trạng và xét nghiệm nước tại công trình"
  },
  {
    step: "02",
    title: "System Design & Equipment Selection",
    subtitle: "Custom-engineering based on demand and operational context",
    desc: "From the survey data, WWCo builds the hydraulic schematic, calculates flows and capacities, and specs the proper equipment.",
    detail: [
      "Calculate domestic and hot water peak concurrent demand.",
      "Size the Heat Pump, buffer tanks, and filtration media.",
      "Design supply, return, backwash, and control schematics.",
      "Select equipment matched to the site's realistic conditions."
    ],
    icon: "FileCode2",
    image: "/images/process/step-02-engineering-design.jpg",
    imageAlt: "Kỹ sư WWCo thiết kế nguyên lý hệ nước trung tâm trên bản vẽ kỹ thuật"
  },
  {
    step: "03",
    title: "Solution Approval & Procurement",
    subtitle: "Synchronizing specs and timelines before deployment",
    desc: "WWCo aligns the technical plan with the owner, architect, and MEP teams before ordering materials and setting schedules.",
    detail: [
      "Finalize equipment placement and pipe routing plans.",
      "Review pumps, valves, control panels, and accessories.",
      "Validate equipment models and specifications.",
      "Develop delivery, installation, and coordination schedules."
    ],
    icon: "HardHat",
    image: "/images/process/step-03-material-preparation.jpg",
    imageAlt: "Vật tư và thiết bị hệ nước trung tâm được kiểm tra trước khi triển khai"
  },
  {
    step: "04",
    title: "MEP Coordination & Pre-piping",
    subtitle: "Controlling sleeves, power, drainage, and technical spaces",
    desc: "WWCo coordinates with site MEP crews to ensure all waiting pipes, power drops, and drains are correctly positioned.",
    detail: [
      "Mark precise connections for supply, return, and filtered lines.",
      "Guide electrical drops, panels, and signal wiring paths.",
      "Verify drainage for backwashing and safety relief valves.",
      "Prevent costly concrete modifications post-construction."
    ],
    icon: "Wrench",
    image: "/images/process/step-04-mep-coordination.jpg",
    imageAlt: "WWCo phối hợp đội MEP kiểm tra tuyến ống chờ và hạ tầng kỹ thuật"
  },
  {
    step: "05",
    title: "Installation, Pressure & Run Tests",
    subtitle: "Rigorous technical assembly and pre-commissioning checks",
    desc: "WWCo engineers assemble the plant room, pressure-test all lines, and perform live dynamic test runs to verify performance.",
    detail: [
      "Install Heat Pumps, tanks, filters, pumps, and controls.",
      "Hydrostatic pressure testing to guarantee zero leaks.",
      "System flushing, flow testing, and initial firing.",
      "Verify temperature differentials, pressures, and logic cycles."
    ],
    icon: "Activity",
    image: "/images/process/step-05-installation-testing.jpg",
    imageAlt: "Kỹ thuật viên WWCo lắp đặt, thử áp và chạy thử hệ nước trung tâm"
  },
  {
    step: "06",
    title: "Commissioning & Preventative Maintenance",
    subtitle: "Clear handover protocols and long-term operational care",
    desc: "Following testing, WWCo commissions the system, hands over documentation, trains the users, and sets the service schedule.",
    detail: [
      "Final sign-off on flow rates, pressures, and temperatures.",
      "Handover of schematics, equipment lists, and parameters.",
      "Basic operational overview and safety guidance.",
      "Establish routine preventative maintenance schedules."
    ],
    icon: "CheckSquare",
    image: "/images/process/step-06-handover-maintenance.jpg",
    imageAlt: "WWCo nghiệm thu, bàn giao và thiết lập lịch bảo trì hệ nước trung tâm"
  }
];

export const viArticles: Article[] = [{id:"art1",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Khi nào biệt thự nên dùng hệ nước nóng trung tâm?",description:"Biệt thự nhiều phòng tắm, có bồn tắm, tuyển ống xa hoặc nhu cầu sử dụng đồng thời thường cần hệ nước nóng trung tâm để đảm bảo sự ổn định và tiện nghi.",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"25 Tháng 05, 2026",content:["Với các căn biệt thự có từ 3 phòng tắm trở lên hoặc có thiết kế dàn trải đa hướng, việc sử dụng các hệ thống bình nóng lạnh cục bộ thường bộc lộ những rủi ro lớn về tính tiện nghi và an toàn điện năng.","Dưới đây là 4 tình huống thực tế cho thấy cấu hình một trạm sưởi và cấp nước nóng trung tâm (Heat Pump) kết hợp bồn hồi tuần hoàn là giải pháp tối ưu hàng đầu:","1. Biệt thự thiết kế nhiều phòng tắm vận hành đồng thời: Khi các thành viên trong gia đình sử dụng nước nóng cùng một thời điểm vào buổi tối, áp lực và nhiệt lượng tại các vòi sen âm tường hay vòi bồn tắm đứng sẽ bị ảnh hưởng, gây ra cảm giác thay đổi nhiệt đột ngột nếu chỉ dùng các bình độc lập có dung tích hạn chế.","2. Sử dụng bồn tắm nằm cỡ lớn hoặc sen phun mưa lượng cao: Một bồn tắm nằm đơn thông thường cần từ 150 lít đến 300 lít nước nóng ở nhiệt độ 40°C để đầy bồn. Bình cục bộ 30 lít hoàn toàn không đủ để cấp đầy bồn tắm, buộc người dùng phải chờ đợi súc bình rất bất tiện.","3. Tuyến đường ống cấp nước có độ dài lớn: Trong kiến trúc biệt thự rộng, khoảng cách từ phòng máy hoặc điểm lắp bình đến các vòi tắm xa nhất có thể đạt từ 15m đến 35m. Nước nóng trong ống nguội đi sau mỗi lần tắt vòi, dẫn đến việc phải xả bỏ tới vài chục lít nước lạnh đọng trong ống trước khi có nước ấm chảy ra.","4. Đảm bảo yêu cầu thẩm mỹ và tối ưu hóa không gian phòng tắm: Việc không lắp bình cục bộ cồng kềnh giúp hạ trần thạch cao thoáng hơn, khoe trọn vẹn vẻ tinh tế của đá ốp lát và tôn vinh những thiết bị vệ sinh sang trọng cao cấp."]},{id:"art2",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Vì sao nước nóng chờ lâu dù đã lắp máy tốt?",description:"Thời gian chờ nước nóng không chỉ phụ thuộc vào máy, mà còn liên quan đến chiều dài đường ống, bơm hồi, cảm biến nhiệt và cách bố trí tuyến cấp – hồi.",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"18 Tháng 05, 2026",content:["Nhiều gia chủ băn khoăn: Tại sao tôi đã mua và lắp đặt một chiếc máy Heat Pump cao cấp của châu Âu trị giá hàng trăm triệu đồng, nhưng khi mở vòi vẫn phải chờ tới 1 đến 2 phút mới có nước ấm?","Nguyên nhân mấu chốt nằm ở chỗ: Máy làm nóng nước rất nhanh và lưu trữ trong bồn bảo ôn ở nhiệt độ cao, nhưng khi không sử dụng, phần nước nằm dọc tuyến ống dắt từ bồn bảo ôn đến vòi tắm sẽ bị nguội đi do nhiệt truyền ra môi trường.","Muốn loại bỏ thời gian chờ nguội bế tắc này, hệ thống cần thiết kế đường ống tuần hoàn hồi dội (Recirculation line) kết hợp bơm hồi nước nóng thông minh và các giải pháp điều khiển tự động:","1. Đường ống hồi: Là đường ống chạy song song với ống cấp nước nóng, dẫn lượng nước đã nguội ở điểm cuối vòi tắm quay trở lại bồn bảo ôn trung tâm.","2. Bơm tuần hoàn hồi: Khi cảm biến nhiệt độ nhận thấy nước ấm trong ống xuống dưới mức cài đặt (ví dụ 38°C), bơm sẽ tự động kích hoạt để đẩy dòng nước nguội này về bồn sưởi súc lại, đồng thời kéo nước nóng từ bồn đến sẵn chờ tại vòi tắm.","3. Thiết lập chu Trình thông minh: Bơm hồi không cần sụt chạy liên miên gây hao điện và mòn trục. Bơm được thiết kế chạy theo khung giờ nhu cầu (Morning/Evening), hoặc kích hoạt thông qua cảm biến chuyển động khi bước vào phòng tắm, giúp mang lại sự tiện nghi hoàn mỹ tức thì cùng khả năng tiết kiệm điện vượt trội."]},{id:"art3",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Heat Pump khác gì bình nóng lạnh thông thường?",description:"So sánh nguyên lý hoạt động, khả năng cấp nước nóng, mức tiêu thụ điện và sự phù hợp với biệt thự nhiều điểm dùng nước.",image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",readTime:"6 phút đọc",date:"12 Tháng 05, 2026",content:["Bơm nhiệt (Heat Pump) là công nghệ sưởi và đun nước hiện đại, hoạt động theo nguyên lý chuyển dịch năng lượng nhiệt thay vì sinh nhiệt trực tiếp từ điện trở như bình nóng lạnh thông thường.","If so sánh chi tiết, hai hệ thống này có sự khác biệt rõ rệt về hầu hết các khía cạnh:","1. Nguyên lý làm nóng: Bình nóng lạnh thông thường dùng thanh gia nhiệt (điện trở) để trực tiếp chuyển hóa 100% điện năng thành nhiệt năng. Bơm nhiệt dùng quạt hút nhiệt lượng từ không khí ngoài trời, nén qua môi chất lạnh tăng nhiệt áp rồi gián tiếp truyền vào bồn chứa nước, chỉ dùng điện cho máy nén và quạt.","2. Hiệu suất năng lượng (COP): Nhờ thu hồi năng lượng miễn phí từ khí quyển, Heat Pump đạt chỉ số COP từ 3.8 đến 4.5. Nghĩa là tiêu tốn 1kW điện sẽ tạo ra tới 4kW nhiệt năng, giúp tiết kiệm từ 75% đến 82% lượng điện tiêu thụ so với bình sưởi trực tiếp.","3. Sự an toàn tuyệt đối: Vì không sử dụng thanh gia nhiệt bằng điện ngâm trực tiếp trong nước, rủi ro rò rỉ dòng điện cao áp vào dòng nước tắm hoàn toàn bị loại bỏ, mang lại sự an tâm tuyệt đối cho mọi gia đình.","4. Quy mô đáp ứng: Bình thông thường giới hạn ở dung tích nhỏ 15L - 50L cho 1 phòng tắm duy nhất. Bơm nhiệt tích hợp bồn bảo ôn lớn từ 200L - 500L cấp nguồn nước nóng dồi dào, ổn định cho toàn bộ tòa nhà."]},{id:"art4",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Bơm hồi nước nóng là gì và khi nào cần dùng?",description:"Làm rõ vai trò của bơm hồi trong việc giảm thời gian chờ nước nóng tại các phòng tắm xa phòng kỹ thuật.",image:"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"05 Tháng 05, 2026",content:["Bơm hồi nước nóng (Hot water recirculation pump) là thiết bị then chốt kiểm soát lưu thông dòng chảy trong hệ thống sưởi ấm nước trung tâm của biệt thự.","Nhiệm vụ cốt lõi của bơm hồi là duy trì mức nhiệt độ ổn định lập tức ngay tại co nối của sen vòi tắm, triệt tiêu thời gian xả bỏ dòng nước lạnh chờ đợi lạnh lẽo ban đầu.","Bạn cần trang bị bơm hồi nước nóng khi công trình đáp ứng các tiêu chí kỹ thuật sau:","1. Khoảng cách đi ống dài hơn 8m: Bất kỳ tuyến ống nào từ điểm đun (Heat Pump) đến vòi tắm xa hơn 8 mét đều phát sinh hiện tượng đọng nguội rõ rệt sau 30 phút dừng sử dụng.","2. Biệt thự cao tầng hoặc thông gian mở: Sự chênh lệch chiều cao lớn giữa các tầng tạo áp lực dòng chảy và tăng dung tích đọng nước. Bơm hồi tuần hoàn giúp đảm bảo áp ấm cân bằng.","3. Cách lắp đặt tối ưu: Hệ thống điều tiết bơm hồi thông minh sẽ phối hợp cảm biến nhiệt kế gắn trên ống chứa nước phản hồi. Bơm chỉ sụt điện chạy vài phút để thay mới dòng nước sụt nhiệt, đảm bảo tiết kiệm điện năng sưởi tối đa và tăng tuổi thọ động cơ."]},{id:"art5",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Vì sao thiết kế đường ống quan trọng hơn chọn máy thật lớn?",description:"Phân tích ảnh hưởng của đường ống, lưu lượng, áp lực và cách chia tuyến đến trải nghiệm sử dụng nước nóng.",image:"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"28 Tháng 04, 2026",content:["Quan niệm mua một chiếc máy Heat Pump thật to, sắm bồn bảo ôn thật lớn là đủ để gia đình tắm nước nóng xả láng là một sai lầm phổ biến trong thi công cơ điện.","Trên thực tế, trải nghiệm của người dùng tại sen tắm phụ thuộc 80% vào thiết kế thủy lực và thi công mạng lưới đường ống trong nhà, thay vì chỉ nằm ở công suất danh định của máy sưởi.","Thiết kế đường ống không chuẩn mực sẽ lập tức gây ra các hiện tượng phiền toái:","1. Hiện tượng suy giảm áp lực nước thảm hại: Khi cả 3 phòng tắm cùng mở vòi sen, áp suất cấp nước nóng tụt giảm mạnh khiến lưu lượng nước nóng yếu ớt, thậm chí bị pha lạnh do chênh lệch áp.","2. Đất tổn hao nhiệt năng khổng lồ: Đường ống cấp không bọc bảo ôn cách nhiệt kỹ thuật hoặc bọc quá mỏng sẽ thất thoát năng lượng tỏa ra bê tông sàn liên tục, khiến máy Heat Pump phải tái khởi động đun liên tục dù không có ai tắm.","Mấu chốt thiết kế: Đội thiết kế của WWCo luôn tính toán chia phân nhánh vòng lặp cấp kết hợp ống chịu nhiệt PPR hoặc PEX chất lượng cao bọc lớp bảo ôn Polyurethane định hình dày dặn, kết nối cùng các van cân bằng áp suất tự động."]},{id:"art6",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Lọc nước tổng có cần thiết cho biệt thự không?",description:"Làm rõ vai trò của lọc nước đầu nguồn trong việc giảm cặn bẩn, clo dư, độ cứng và bảo vệ thiết bị trong nhà.",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"22 Tháng 04, 2026",content:["Nhiều người cho rằng nước đô thị súc xả từ nhà máy nước sạch sông Đà, sông Đuống đạt tiêu chuẩn sinh hoạt là hoàn toàn yên tâm dùng trực tiếp.","Tuy nhiên, hành trình nước máy đi qua hàng km đường ống dẫn ngầm rỉ sét, bể chứa chung cư hoặc bể ngầm bê tông lâu ngày của gia đình luôn rình rập nguy cơ tái ô nhiễm hóa lý cao độ.","Lắp đặt hệ thống lọc nước tổng đầu nguồn (Point-of-Entry Filtration) mang lại các lợi ích cốt lõi:","1. Loại bỏ cặn thô, rỉ sét và kim loại nặng lơ lửng: Tấm chặn và màng lọc cát đa tầng hoạt tính giữ lại hạt cát, rỉ sắt bong tróc từ tuyến ống phân phối đô thị.","2. Hấp phụ clo dư, hóa chất khử trùng độc hại: Lượng clo dư quá mức gây mùi clo nồng nặc và gây hỏng da, khô tóc xơ tế bào da khi tắm bồn.","3. Làm mềm nước khử vôi canxi triệt để: Trung hòa khoáng cứng Ca2+, Mg2+ để tránh đóng cặn bám xám trắng lên bề mặt sen vòi Grohe, Kohler mạ chrome đắt giá, bảo toàn độ thông thoáng của màng trao đổi nhiệt sưởi ấm dài lâu."]},{id:"art7",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Lọc tổng khác gì máy lọc uống trực tiếp?",description:"Phân biệt mục đích xử lý nước sinh hoạt toàn nhà và nước uống trực tiếp tại từng điểm sử dụng.",image:"https://images.unsplash.com/photo-1585418694458-dc809e120202?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"15 Tháng 04, 2026",content:["Đây là hai hệ thống lọc nước có chức năng, vị trí và công suất hỗ trợ hoàn toàn bổ trợ lẫn nhau trong một ngôi nhà hiện đại, không thể dùng hệ này để thay thế loại kia.","Sự khác biệt được cấu trúc dựa trên quy chuẩn kỹ thuật rõ rệt:","1. Về lưu lượng và phạm vi bảo vệ: Lọc tổng lắp tại đầu nguồn sau đồng hồ cấp nước chính, xử lý toàn bộ nước tắm rửa giặt giũ, bảo vệ đường ống và thiết bị toàn nhà với công suất lớn (2.5 đến 4.0 m³/h). Máy lọc uống trực tiếp (RO/UF gầm bếp) chỉ xử lý nước ăn uống nấu nướng tại vòi nhỏ (15L/h).","2. Về cấp độ giữ màng chất lượng nước: Lọc tổng giữ lại các tạp chất kích thước từ 1-5 micron hoặc siêu lọc UF 0.01 micron loại bỏ vi khuẩn hóa chất thô. Máy lọc tinh gầm bếp giữ kích thước 0.0001 micron để lọc bỏ các muối hòa tan khoáng mịn tạo vị ngọt tinh khiết đạt chuẩn uống trực tiếp tại vòi.","Việc trang bị lọc tổng súc rửa sạch cặn vôi clo loãng ban đầu sẽ giúp bảo vệ tối tăm kéo dài tuổi thọ các lõi lọc tinh uống trực tiếp đắt đỏ gấp 3-5 lần."]},{id:"art8",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Nước cứng ảnh hưởng gì đến thiết bị trong biệt thự?",description:"Giải thích tác động của canxi, magie đến sen vòi, thiết bị vệ sinh, bình nước nóng, đường ống và trải nghiệm sinh hoạt.",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"08 Tháng 04, 2026",content:["Nước cứng (Hard water) là nguồn nước chứa nhiều ions canxi (Ca2+) và magie (Mg2+) vượt mức tiêu chuẩn cho phép trong sinh hoạt chất lượng cao.","Mặc dù không gây nguy hại sức khỏe lập tức, nước cứng âm thầm phá hủy kiến trúc nội thất biệt thự theo năm tháng sử dụng:","1. Tạo cặn bám phá hoại sen vòi mạ chrome, vách kính tắm: Chỉ sau vài tuần sử dụng, vệt cặn ố trắng vôi canxi két cứng bám đầy bồn sứ, sen vòi, vách kính phòng tắm, mài mòn hóa học lớp mạ làm chúng mờ ố không thể tẩy sạch.","2. Làm giảm hiệu suất của bơm sưởi Heat Pump và bình nước nóng: Lớp xỉ vôi canxi cách nhiệt bọc cứng lõi trao đổi nhiệt của Heat Pump, làm giảm hiệu năng cấp nhiệt ẩm nhanh chóng, tăng tiêu hao điện năng sưởi sụt giảm công suất đun đớn đau.","3. Tắc nghẽn mạng lưới dẫn ống ngầm trong vách tường tường: Mảng bám canxi dày cộp bám dọc lòng ống PPR làm thu hẹp thiết diện chảy dòng, giảm áp lực nước đáng kể.","WWCo sử dụng module súc hút nhựa trao đổi ion (Cation) nhập khẩu Đức để súc rửa hấp phụ Ca2+, trả lại nguồn nước mềm trơn mượt tinh tế nhất cho ngôi nhà bạn."]},{id:"art9",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Vì sao hệ lọc nước cần xả rửa định kỳ?",description:"Làm rõ vai trò của chu trình xả rửa trong việc duy trì hiệu quả lọc, hạn chế tắc nghẽn và kéo dài tuổi thọ vật liệu lọc.",image:"https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"02 Tháng 04, 2026",content:["Một hệ lọc nước giống như chiếc chổi - sau khi quét dọn rác bẩn trong nước sinh hoạt, bản thân các cột lọc sẽ tích tụ dồn nén một lượng mùn, rỉ sét và vôi canxi khổng lồ.","Nếu không có chu trình xả rửa định kỳ súc đẩy chất bẩn ra ngoài nước xả thải, bộ lọc sẽ lâm vào trạng thái bão hòa chất bẩn dồn ứ, thậm chí phát sinh rò rỉ bẩn chảy dội dột ngược vào trong nhà.","Quy trình tự động xả rửa thông minh sục ngược (Backwash) và rửa xuôi (Rinse) đem lại các giá trị vận hành tối ưu:","1. Giải phóng hoàn toàn các lớp cặn váng rỉ sét đọng trong cột lọc cát đa tầng, đảm bảo dòng chảy lưu lượng lớn thông suốt suốt ngày đêm.","2. Hoàn nguyên hạt cation nhựa bọc làm mềm bằng dung dịch muối tinh chất, tái sinh hoàn toàn năng lực hấp phụ vôi canxi lâu bền.","Mọi hệ thống xử lý nước trung tâm xử lý lắp đặt bởi WWCo đều lắp cụm van điều khiển tự điện tự động tinh tế nhập khẩu Mỹ, tự tính toán chu lượng nước thực để hẹn giờ sục súc rửa tĩnh mịch vào 2 giờ sáng."]},{id:"art10",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Sưởi sàn nước nóng phù hợp với công trình nào?",description:"Giải thích các không gian nên dùng sưởi sàn như phòng khách, phòng ngủ, biệt thự nghỉ dưỡng và khu vực miền Bắc.",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"26 Tháng 03, 2026",content:["Sưởi sàn thủy lực tuần hoàn nước nóng (Underfloor Hydronic Heating) là đỉnh cao của công nghệ sưởi ấm không khí tĩnh mịch ấm áp hiện đại tại châu Âu và miền ôn đới.","Hệ thống sưởi sàn nước nóng mang lại sự tuyệt hảo hàng đầu cho các cấu trúc xây dựng đặc thù:","1. Biệt thự vùng có khí hậu mùa đông lạnh hoặc ẩm nồm ở miền Bắc (Hà Nội, Tam Đảo, Sapa, Ba Vì, v.v.): Nơi nhiệt độ có thể xuống dưới 10 độ cùng sương mù ẩm cao gây buốt giá xương.","2. Căn hộ có trẻ nhỏ, người lớn tuổi dễ mắc bệnh hô hấp: Vì sưởi sàn không dùng quạt gió thổi luẩn quẩn khí nóng khô sờ, giữ cho bàn và phổi của trẻ nhỏ luôn ấm mềm dễ chịu khi dạo bước chân trần chân thô.","3. Không gian có kiến trúc trần cao, thông tầng, phòng khách rộng lớn: Khí ấm sưởi sàn tỏa đều từ dưới đất bốc chậm dịu lên cao, không bị lãng phí sưởi không gian rỗng vô lý trên đỉnh trần."]},{id:"art11",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Vì sao sưởi sàn cần thiết kế từ giai đoạn đầu?",description:"Phân tích yêu cầu về cao độ nền, tuyến ống, manifold, nguồn nhiệt và bộ điều khiển nhiệt độ.",image:"https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"19 Tháng 03, 2026",content:["Không thể lắp đặt hệ thống sưởi sàn nước nóng thủy lực khi trần, sàn thạch cao và gạch đã được ốp lát hoàn thiện trơn bóng gọn gàng.","Thiết kế sưởi sàn bắt buộc phải được phối hợp với kiến trúc sư và đội thi công MEP thô ngay từ bản vẽ kỹ thuật cơ sở bởi các ràng buộc kỹ thuật chặt chẽ:","1. Yêu cầu về độ dày cao độ sàn lớp bê tông đè: Tổng độ dày của hệ sưởi gồm lớp xốp chống thoát nhiệt đáy (30mm), lớp ống sưởi PEX lượn sóng và lớp vữa cán phủ phân nhiệt (tối thiểu 50-70mm). Nếu không tính độ âm sàn thô từ đầu, nền nhà của bạn sẽ bị đôn cao hụt cửa rào móng dầm.","2. Thiết lập kỹ thuật phòng máy sưởi và tủ âm manifold phân phối: Cần quy hoạch các hộp tủ âm tường thanh nhã để đặt cụm chia Manifold van điều tiết điện từ tinh tế tại mỗi tầng lầu.","Do đó, WWCo khuyên các kiến trúc sư luôn bàn giao phương án sưởi sàn ngay khi định hình kết cấu dầm sàn để tối ưu hóa thời gian và tránh phát sinh đục dốc bạt bê tông sàn tàn nhẫn."]},{id:"art12",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Sưởi sàn nước nóng khác gì điều hòa hai chiều?",description:"So sánh cảm giác nhiệt, độ êm, độ khô không khí, mức độ tiện nghi và sự phù hợp với không gian nghỉ dưỡng.",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"12 Tháng 03, 2026",content:["Đều giữ chức năng làm ấm phòng sưởi lạnh, sưởi sàn nước nóng sưởi ấm tĩnh dịu mang lại cảm nhận hoàn toàn ưu việt vượt đẳng so với giải pháp dùng luồng hơi nóng điều hòa:","1. Trải nghiệm bức xạ nhiệt chân ấm đầu mát: Sưởi sàn tỏa nhiệt từ chân đứng truyền theo thói quen tự nhiên cơ thể (ấm bàn chân, đầu mát dịu). Điều hòa thổi luồng khí nóng thốc từ đỉnh trần gây nặng đầu, khô da mắt buốt rát bên mặt.","2. Vận hành tuyệt đối yên lặng và sạch bụi mịn: Sưởi sàn không sử dụng cánh quạt thổi cơ khí, loại bỏ hoàn toàn vi tiếng ồn rè rè khó chịu ban đêm, đồng thời không khuấy động luồng bụi bẩn thổi bay lơ lửng trong phòng ngủ.","3. Tiết kiệm năng lượng bền bỉ: Thể tích nhiệt lượng truyền qua bôi nước nóng lưu giữ lâu bền trong lớp vữa cán gạch sưởi ấm, giữ nền ấm lâu sau tắt nguồn, giúp bảo toàn điện năng tốt vượt bực so với luồng hơi bốc hơi tan nhanh rợn."]},{id:"art13",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Vì sao phải phối hợp MEP trước khi lắp thiết bị?",description:"Làm rõ tầm quan trọng của ống chờ, điện cấp nguồn, thoát nước kỹ thuật, không gian bảo trì và tiến độ công trường.",image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"05 Tháng 03, 2026",content:["Hệ cơ điện nước (MEP - Mechanical, Electrical, Plumbing) chính là huyết mạch vận hành của một căn biệt thự nghỉ dưỡng. Một thiết bị dù đắt tiền đến đâu nếu thi công chắp vá không phối hợp sẽ bộc lộ rạn nứt vận hành.","Sự thiếu đồng bộ MEP thường thể hiện qua các điểm bế tắc thực địa:","1. Ống chờ không khớp độ dốc thoát nước: Gây ứ đọng tù bùn súc cột lọc khi xả sút rửa bồn chứa.","2. Không chừa không gian lối mở bảo trì: Nhiều phòng máy bị trám bít không có tay vặn kìm mở vít lõi lọc, buộc thợ bảo dưỡng phải đạp tháo dỡ trần thạch cao nội thất vô lý.","3. Thiếu công suất cung cấp điện nguồn hay tải trọng dầm ban công: Bơm sưởi Heat Pump công suất lớn cần kết nối dải atomat điện động lực 3 pha riêng biệt an toàn.","Tại WWCo, chúng tôi luôn xuất tài liệu bản vẽ định tuyến sơ phối cảnh 3D kết nối dọc trục vách, ngồi thống nhất trực tiếp cùng nhà thầu xây thô và kỹ sư điện nước trước khi cho hàng ra công trình."]},{id:"art14",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Phòng kỹ thuật hệ nước nên chuẩn bị những gì?",description:"Gợi ý các điều kiện cần có cho phòng kỹ thuật: diện tích, thoát nước, điện, thông gió, khoảng thao tác và lối bảo trì.",image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"26 Tháng 02, 2026",content:["Một phòng máy kỹ thuật hệ nước được bố trí gọn gàng, cách âm, thông thoáng là trung tâm vận hành hoàn hảo giúp kéo dài tuổi thọ thiết bị đến trên 15 năm.","Dưới đây là cẩm nang thiết kế cơ điện phòng kỹ thuật tối ưu khuyến nghị bởi WWCo:","1. Diện tích sàn thao tác phân chia hợp lý: Tối thiểu từ 2.5m² đến 4.5m² cho cụm nước sưởi nóng kết hợp lọc tổng. Có khoảng hở thao tác thay lõi lọc tối thiểu 60cm phía trước các cột lọc.","2. Trọng tải sàn bệ móng kỹ thuật vững chãi: Đổ bê tông bệ giật cấp 10cm cách vữa sàn sút, đảm bảo chịu lực tốt của bồn sưởi dung tích 500L chứa đầy nước (gần 600kg tổng tải).","3. Tuyến thoát sàn lớn chống rò rỉ ngập: Một hố ga thoát thoát dòng chảy tự do phi 60-90 để gom nước súc sạch lõi lọc súc dính nhanh mượt, không sạt ố ban công kỹ thuật."]},{id:"art15",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Những lỗi thường gặp khi làm hệ nước nóng cho biệt thự",description:"Tổng hợp các lỗi phổ biến như thiếu đường hồi, chọn sai dung tích, bố trí ống xa, thiếu thoát nước và không có không gian bảo trì.",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"19 Tháng 02, 2026",content:["Với hơn 10 năm kinh nghiệm xử lý sửa đổi nâng cấp hàng chục hệ cấp sưởi nước nóng trung tâm bị hỏng lỗi hụt hơi tại Hà Nội, Đà Nẵng, WWCo chỉ ra 3 thiếu sót chí mạng nhất trong xây dựng biệt thự:","1. Quên thiết kế đường ống hồi hoặc dắt đường hồi sụt áp dòng: Khiến bơm hồi chạy hao tốn điện, gây áp lực dính bến nước nóng bị hẹp nghẹt phập phù không thể điều phối.","2. Chọn sai bồn chứa dung tích hoặc chọn bồn tráng nhựa mỏng: Chỉ sau thời gian ngắn tiếp xúc nước sưởi 60-65°C chất lượng cao, thành bồn giãn nứt bung rò rỉ nước ngập hỏng sàn gác lầu tháo dỡ đau đớn.","3. Sử dụng van một chiều rẻ tiền dễ bám bụi xỉ sinh hoạt: Khiến dòng nước lạnh ăn dội thốc dội ngược vào ống chứa nước nóng, triệt sụt nhiệt lượng trong bình bảo ôn một cách lãng phí vô ích."]},{id:"art16",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Vì sao không nên chờ nhà hoàn thiện mới xử lý hệ nước?",description:"Phân tích rủi ro khi hệ nước trung tâm không được tính toán từ đầu, dẫn đến đục phá, thiếu ống chờ và khó bố trí thiết bị.",image:"https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"12 Tháng 02, 2026",content:["Quá trình thi công hoàn thiện nội thất biệt thự đòi hỏi tính thẩm mĩ nghiêm khắc từng vách tường gạch lát chỉ phào thạch cao.","Nếu chủ đầu tư để đến khi nhà sơn bả, lót sàn gỗ và lắp sen vòi xong mới liên hệ mua trạm lọc sưởi nước trung tâm, những kịch bản phiền toái thảm họa sau đây gần như chắc chắn sẽ xảy ra:","1. Phải khoan cắt xuyên dầm, đục phá những tấm sàn gỗ gạch tốn hàng trăm triệu đồng để luồn bổ sung tuyến ống hồi nước nóng phát sinh.","2. Thiết kế hộp kỹ thuật (hộp gen) quá hẹp, không thể nhồi lọt đường ống sưởi cách nhiệt dày bọc bảo ôn dẹp cứng.","3. Mất đi hoàn toàn bảo hành từ nhà thầu xây thô ban đầu do đục can thiệp thay kết cấu sườn nhà đớn đau.","WWCo khuyến khích chủ đầu tư lập nhóm tư vấn công nghệ nước sưởi ngay từ bước xin cấp phép thiết kế sơ bộ để tận hưởng trọn vẹn sự tinh gọn an lành tuyệt đối."]},{id:"art17",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Vì sao biệt thự nên tính toán hệ nước ngay từ giai đoạn thiết kế?",description:"Hệ nước trung tâm cần được tính từ sớm để bố trí phòng kỹ thuật, tuyến ống, điện cấp nguồn, thoát nước và không gian bảo trì phù hợp.",image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"02 Tháng 06, 2026",content:["Hệ nước trung tâm trong các căn biệt thự bao gồm giải pháp nước nóng Heat Pump, lọc nước tổng đầu nguồn và sưởi ứng dụng nhiệt thủy lực. Đây không phải là những module lắp ghép nhỏ lẻ có thể tùy tiện gắn sau khi hoàn thiện công trình.","Việc tính toán hệ nước ngay từ giai đoạn sơ đồ nguyên lý kiến trúc là điều quyết định tính thẩm mỹ, hiệu năng và tránh lãng phí ngân sách đục phá sau này. Những nguyên nhân mấu chốt bao gồm:","1. Đảm bảo cao độ nền và kết cấu thô: Các hệ thống sưởi sàn nước nóng cần từ 80mm đến 100mm chiều cao thô của sàn để bố trí các lớp xốp cách nhiệt, lưới định vị, tuyến cấp ống PEX và lớp bê tông cán truyền nhiệt. Nếu không trừ cao độ ngay lúc đổ sàn, cao độ cửa đi và chiều rộng bậc thang sẽ bị biến đổi nguy hiểm.","2. Bố trí tuyến cấp nguồn điện và hộp kỹ thuật (hộp gen) đồng bộ: Trạm bơm nhiệt Heat Pump thường có công suất ngốn diện và cần điện động cơ 3 pha an toàn riêng. Đường ống dẫn nước bảo ôn bọc Polyurethane cũng có đường kính lớn gấp đôi ống thông thường, cần hộp kỹ thuật đủ rộng để uốn và dẫn ống.","3. Quy hoạch không gian vận hành và thoát nước kỹ thuật: Hệ lọc tổng cần đường nước thải phi lớn để sục xả hạt cation và xả rỉ bùn. Nếu không chừa ống xả cơ điện riêng biệt, nước thải có nguy cơ trào ngược hư hỏng sàn hoa sảnh."]},{id:"art18",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Phòng kỹ thuật hệ nước trong biệt thự cần chuẩn bị những gì?",description:"Một phòng kỹ thuật tốt cần đủ diện tích, thoát nước, điện, thông gió, khoảng thao tác và lối tiếp cận để bảo trì.",image:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"01 Tháng 06, 2026",content:["Phòng kỹ thuật (Mechanical Room) là trái tim vận hành toàn bộ hệ cơ điện nước của biệt thự, là nơi đặt các thiết bị xử lý lọc nước chính, bình tích nhiệt, Heat Pump trung tâm, bơm tuần hoàn áp bồn sấy và tủ cấp điều khiển.","Để đảm bảo thiết bị vận hành hiệu quả tới trên 15 năm và dễ dàng bảo dưỡng súc rửa, phòng kỹ thuật cần được quy hoạch chuẩn chỉ theo các tiêu chí sau:","1. Diện tích mặt sàn trống tối thiểu: Một không gian tối ưu cần từ 3m² đến 6m² tùy vào số lượng tầng và phòng tắm cần cấp. Cần đảm bảo khoảng thao tác trống rộng rãi ít nhất 60cm phía trước các cột lọc tổng đầu nguồn để thợ kỹ thuật có thể mở van tháo dỡ định kỳ chuyển hạt nhựa cation.","2. Đổ bệ nền bê tông vững chắc: Bồn bảo ôn tích chứa nhiệt nóng từ 300L - 500L chứa đầy nước sẽ nặng từ 400kg đến 600kg. Do đó, cần đổ bệ bê tông vững chãi giật cấp cao 10-15cm so với mặt nền sút xối nước để cách ly ẩm ướt và chịu lực an toàn lâu dài.","3. Thiết bị cấp thoát nước thải lưu lượng lớn: Quá trình xả rửa ngược cột lọc cần lưu thông nước rất nhanh. Phòng kỹ thuật buộc phải có phễu thu sàn tối thiểu phi 75 để gom dòng nước xả xối lớn, tránh nguy cơ tràn ứ ra khu vực lân cận."]},{id:"art19",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Những lỗi thường gặp khi làm hệ nước nóng cho biệt thự",description:"Thiếu đường hồi, chọn sai dung tích bồn, bố trí tuyến ống quá xa và thiếu không gian bảo trì là những lỗi thường gặp.",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"30 Tháng 05, 2026",content:["Hệ cấp sưởi nước nóng trung tâm sử dụng bơm nhiệt Heat Pump là lựa chọn hàng đầu cho biệt thự hiện đại. Tuy nhiên, nếu thiếu tính toán kỹ thuật chiều sâu trong thiết kế móng mỏ, hệ thống sẽ bộc lộ nhiều nhược điểm gây phiền toái lớn cho gia chủ.","WWCo tổng hợp các sai sót thường thấy nhất trên công trường thực tế:","1. Thiếu đường ống hồi và bơm tuần hoàn hồi nước nóng: Đây là lỗi phổ biến nhất. Điều này khiến nước đọng nguội trong ống chính. Khi gia chủ mở vòi tắm ở tầng 3, tầng 4, họ sẽ phải xả bỏ từ 20L đến 50L nước lạnh buốt trong vòng vài phút trước khi có nước ấm, gây lãng phí nguồn tài nguyên nước cực kỳ bất tiện.","2. Chọn sai dung tích bồn bảo ôn hoặc công suất sấy của Heat Pump: Chọn bồn quá nhỏ dựa theo cảm tính khiến gia đình bị hụt nước nóng trong giờ cao điểm khi nhiều phòng tắm cùng xả bồn nằm. Chọn máy quá lớn lại gây lãng phí chi phí đầu tư, tốn diện năng vận hành dư thừa.","3. Tuyến ống dài không bọc bảo ôn cách nhiệt chất lượng: Do không bọc lớp foam Polyurethane dày dặn, nhiệt lượng từ ống nước nóng truyền thẳng ra hộp kỹ thuật và vách bê tông, làm máy Heat Pump phải khởi động liên tục suốt ngày đêm."]},{id:"art20",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Bồn tích nhiệt trong hệ nước nóng trung tâm có vai trò gì?",description:"Bồn tích nhiệt giúp lưu trữ nước nóng, ổn định nhiệt độ và đáp ứng nhu cầu sử dụng trong giờ cao điểm.",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"28 Tháng 05, 2026",content:["Trong hệ nước nóng trung tâm Heat Pump, bồn bảo ôn tích nhiệt (Water Storage Tank) đóng vai trò lá phổi dự trữ năng lượng then chốt của toàn dự án.","Nguyên lý vận hành cốt lõi là máy bơm nhiệt sẽ đun nước từ từ và tích nén vào bồn bảo ôn cách nhiệt để gia chủ sử dụng tức thì khi có nhu cầu.","Bồn tích nhiệt chất lượng cao mang lại những giá trị quan trọng dưới đây:","1. Đảm bảo lưu lượng đỉnh giờ cao điểm: Khi cả gia đình cùng trở về nhà tắm rửa vào lúc 19h-20h, bồn tích nhiệt sẽ xả lượng nước nóng dồi dào dự trữ sẵn có mà không gây suy giảm lưu lượng hay sụt áp lực dòng chảy.","2. Kéo dài tuổi thọ cho máy nén Heat Pump: Nhờ có bồn tích nhiệt chứa nước nóng cực đại, máy Heat Pump chỉ cần khởi chạy 1-2 lần mỗi ngày để gia nhiệt toàn bình, tránh tình trạng máy nén phải đóng ngắt liên tục mỗi khi có ai đó mở vòi rửa tay nhẹ.","3. Giảm thất thoát nhiệt năng ra môi trường: Bồn bảo ôn chính hãng WWCo thiết kế lớp bọt xốp Polyurethane đúc dày đến 50mm, giúp giữ nhiệt độ ấm áp của nước nóng hao hụt không quá 2°C trong vòng 24 giờ."]},{id:"art21",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Bơm hồi nước nóng giúp giảm thời gian chờ như thế nào?",description:"Bơm hồi giúp duy trì nước ấm trên tuyến ống chính, giảm thời gian chờ tại các phòng tắm xa phòng kỹ thuật.",image:"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"24 Tháng 05, 2026",content:["Sở hữu một phòng tắm lát đá marble sang trọng với trang thiết bị sen vòi âm tường trị giá hàng ngàn USD, nhưng nếu mở vòi ra phải chờ 2 phút lạnh buốt mới ấm nóng, trải nghiệm tiện nghi của biệt thự sẽ sụt giảm nghiêm trọng.","Đó là lý do đường tuần hoàn nước nóng phối hợp bơm hồi nước nóng (Recirculation unit) được coi là tiêu chuẩn bắt buộc cho phân khúc biệt thự cao cấp:","1. Nguyên lý tuần hoàn hồi: Khi áp dòng trên trục ống cấp nước bị hạ nhiệt độ xuống dưới mức 38°C hoặc 40°C do thời gian dài không dùng, cảm biến nhiệt kế lập tức ghi nhận tín hiệu và báo về bộ điều khiển.","2. Kích hoạt bơm hồi tự động: Bơm đẩy lượng nước đọng dính nguội trong ống theo đường tuyến hồi dội ngược lại bồn bảo ôn đun sấy lại, kéo dòng nước sưởi nóng ở trong bồn lấp đầy tuyến ống dắt ngay sát vách tắm.","3. Các phương án điều khiển tiết kiệm năng lượng: Để tránh bơm hồi chạy làm tiêu hao nhiệt lượng liên miên, WWCo lập trình bơm chạy theo chế độ hẹn giờ tùy biến (khung giờ tắm sáng và tối của gia đình), kết hợp cảm biến dòng chảy thông minh."]},{id:"art22",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Tại sao nước nóng trung tâm cần tính lưu lượng sử dụng đồng thời?",description:"Không phải tất cả thiết bị đều dùng cùng lúc, nhưng cần tính đúng hệ số sử dụng để chọn công suất và dung tích phù hợp.",image:"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"22 Tháng 05, 2026",content:["Khi thiết kế hệ nước nóng trung tâm cho biệt thự, sai lầm lớn nhất của các đơn vị thiếu chuyên môn là cộng dồn cơ học lưu lượng của tất cả thiết bị tắm rồi lựa chọn công suất máy cho công trình.","Ví dụ: Biệt thự có 5 phòng tắm, mỗi sen ấm tiêu hao 15L/phút, tổng cộng là 75L/phút. Thiết kế máy theo lưu lượng cực đại này sẽ dẫn đến chi phí đầu tư khổng lồ, thiết bị quá cỡ tốn kém diện tích đặt để.","Quy trình xử lý tính toán của WWCo thông qua hệ số đồng thời (Simultaneous factor):","1. Tính toán xác suất sử dụng thực tế: Thực tế cho thấy không bao giờ tất cả 5 phòng tắm cùng dùng sen vòi xả tối đa công suất ở cùng một giây phút. Hệ số dùng nước đồng thời thông thường dao động từ 0.3 đến 0.45.","2. Tính toán nhu cầu dự phòng đỉnh: Việc tính lượng nước tiêu dùng cao nhất trong 1 tiếng tập trung (Peak hour demand) giúp lựa chọn chính xác dung tích bồn trữ bảo ôn, phân bổ nhiệt lượng hợp lý, tiết kiệm lớn đến 40% chi phí đầu tư thiết bị."]},{id:"art23",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Heat Pump có phù hợp với biệt thự miền Bắc không?",description:"Heat Pump có thể phù hợp với biệt thự miền Bắc nếu được chọn đúng công suất, dung tích bồn và phương án vận hành.",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"15 Tháng 05, 2026",content:["Khí hậu miền Bắc với mùa đông lạnh buốt, nhiệt độ ngoài trời có thể hạ sâu dưới 10°C, kèm theo hiện tượng mưa phùn và nồm ẩm là thử thách lớn đối với mọi giải pháp cấp nước nóng sinh hoạt.","Hệ máy bơm nhiệt Heat Pump vận hành bằng cách hấp thu năng lượng từ khí quyển xung quanh, do đó khi nhiệt độ trời miền Bắc lạnh sâu vào tháng Một, hiệu năng COP của máy nén sẽ sụt giảm nhẹ.","Tuy nhiên, Heat Pump vẫn là giải pháp cực kỳ tối ưu cho biệt thự miền Bắc nhờ các biện pháp thiết kế phối ghép vượt trội sau:","1. Tính toán tăng cường bù công suất sưởi cực đại: WWCo luôn chọn máy nén Heat Pump có dải nhiệt sưởi rộng và tích hợp bộ điện trở gia nhiệt dự phòng thông minh (Back-up Heater). Phụ trợ này tự động kích hoạt bù nhiệt khi ngoài trời lạnh cực đoan.","2. Tăng cường lớp giữ nhiệt bồn chứa: Với mùa đông buốt lạnh, độ thất thoát nhiệt qua thành bồn bảo ôn tăng cao, đòi hỏi bồn sấy phải chế tạo đạt tiêu chuẩn xuất khẩu châu Âu với bảo ôn định hình mật độ cao (High density Polyurethane)."]},{id:"art24",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Nên đặt Heat Pump và bồn nước nóng ở đâu trong biệt thự?",description:"Vị trí đặt thiết bị ảnh hưởng đến tiếng ồn, bảo trì, chiều dài đường ống, thoát nước và hiệu quả vận hành.",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"10 Tháng 05, 2026",content:["Vị trí thi công lắp đặt trạm trung tâm sưởi ấm nước Heat Pump đòi hỏi sự phối hợp khắt khe giữa kiến trúc kỹ thuật nội ngoại thất và kỹ sư MEP.","Một vị trí bố trí thiết bị hoàn hảo cần đáp ứng đồng bộ 3 tiêu chuẩn cốt lõi sau:","1. Đảm bảo thông thoáng cho luồng gió của Heat Pump: Bản chất máy bơm nhiệt hoạt động giống chiếc điều hòa ngược chiều, cần hút khí nóng ngoài trời và thổi khí hàn ra ngoài. Do vậy, dàn nóng của máy phải đặt ở không gian thông thoáng (sân phơi mái, ban công kỹ thuật rộng), không đặt ở trong góc hẹp bị bít hãm khí rào.","2. Giờ cách âm chống rung tiếng ồn ban đêm: Máy nén có phát tiếng ồn rung nhẹ khi sụt chạy gia nhiệt lớn. Tránh gắn thiết bị sát dầm vách chung tường của phòng ngủ chính. Nên thi công đế đệm cao su giảm chấn triệt tiêu âm truyền.","3. Khoảng cách dắt ống kỹ thuật đến trục đứng: Vị trí đặt máy sưởi càng gần hộp gen trục đứng trung tâm trục đứng chính của tòa nhà càng giúp rút ngắn hành trình cấp hồi, tiết kiệm nhiệt thất thoát tối đa."]},{id:"art25",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Lọc nước trung tâm xử lý những vấn đề gì trong nước sinh hoạt?",description:"Hệ lọc trung tâm thường xử lý cặn bẩn, clo dư, mùi, màu và độ cứng tùy theo chất lượng nước đầu vào.",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"08 Tháng 05, 2026",content:["Hệ lọc nước trung tâm đầu nguồn (Whole-house Filtration System) đóng vai trò lá chắn bảo vệ toàn bộ ngôi nhà khỏi tác nhân có hại hòa tan trong nguồn nước sinh hoạt gia đình.","Khác với các máy RO gầm tủ bếp chỉ làm nhiệm vụ lọc uống, lọc nước tổng đầu nguồn xử lý trực tiếp ba tầng vấn đề chính sau:","1. Loại bỏ cặn thô, hạt bùn mịn cát rỉ sét rỉ bám: Nhờ tầng lọc đa cát thạch anh bọc cát quặng hoạt tính giữ lại tất cả dị chất lơ lửng sủi, tránh lắng cặn rỉ bám dưới đáy bồn trữ bể ngầm.","2. Khử sạch lượng clo dư hóa học cực độc: Clo là chất tẩy trùng bắt buộc dùng trong nước đô thị, nhưng dư thừa clo thường gieo rắc mùi hăng nồng nặc, bào mòn nứt da, xơ thô tóc xơ sợi chân lông gia đình.","3. Xử lý triệt để nước cứng vôi canxi: Hệ cation sút rửa hạt trao đổi ion hấp thụ hoàn toàn ion Ca2+, Mg2+ tạo độ dính xỉ vôi canxi, đem lại dòng nước mềm mại bảo vệ thiết bị cao cấp."]},{id:"art26",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Vì sao cần xét nghiệm nước trước khi chọn hệ lọc tổng?",description:"Chất lượng nước đầu vào quyết định cấu hình lọc, vật liệu lọc và phương án vận hành của toàn hệ thống.",image:"https://images.unsplash.com/photo-1585418694458-dc809e120202?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"05 Tháng 05, 2026",content:["Vật liệu xử lý nước giống như đơn thuốc - bác sĩ không thể kê toa nếu bệnh nhân chưa được nội soi xét nghiệm cơ học cụ thể. Lọc nước trung tâm cũng tương tự.","Nhiều gia chủ thường sai lầm mua các bộ lọc tổng đóng gói sẵn trên thị trường mà không biết rằng chất lượng nước tại mỗi vị trí địa bàn (Quận Tây Hồ khác với Quận Long Biên hay Huyện Hoài Đức) mang các vấn đề lý hóa rất khác nhau.","Những giá trị then chốt từ việc xét nghiệm mẫu nước thô đầu vào của WWCo:","1. Định lượng hàm lượng độ cứng thực tế của Ca2+: Để căn chỉnh lưu lượng nước đi qua cột cation mềm, tính toán chính xác chu kỳ súc hoàn nguyên bằng muối tinh chất, bảo vệ vật liệu bền bỉ.","2. Phát hiện sớm các chỉ số ô nhiễm ẩn chứa sâu sắc: Như nồng độ sắt hòa tan, mangan đen sọc dính, hay lượng amoni vi chất lơ lửng khó ngửi, từ đó bổ sung lõi xử lý chuyên dụng đúng mục đích."]},{id:"art27",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Nước cứng ảnh hưởng gì đến sen vòi, bình nóng và đường ống?",description:"Nước cứng có thể gây đóng cặn trên sen vòi, thiết bị vệ sinh, đường ống và làm giảm hiệu quả trao đổi nhiệt.",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"02 Tháng 05, 2026",content:["Nước cứng với nồng độ muối canxi cacbonat cao là hung thủ thầm lặng bào mòn vẻ thanh lịch sang trọng tôn nghiêm của nội thất biệt thự cao cấp.","Lớp cặn canxi hình thành khi nước bốc hơi hoặc gia nhiệt sấy, bám trụ cứng đầu và tạo ra mảng rỉ rát dột nguy hiểm:","1. Phá hủy diện mạo thiết bị vệ sinh tinh xảo mạ chrome: Lớp vôi canxi bám cứng loang lổ sần sùi lên sen vòi mạ, vách kính phòng tắm, bồn cầu bồn sứ rửa tay. Khiến chúng mất đi hoàn toàn vẻ phản bóng lộng lẫy và không thể lau sạch bằng khăn mềm.","2. Làm giảm hiệu năng đun tỏa nhiệt của Heat Pump nóng: Lớp vôi canxi cách nhiệt rất tốt, bọc cứng xung quanh lõi đồng truyền nhiệt sấy, khiến năng lượng gia nhiệt hao tốn gấp đôi để sưởi được lượng nước tương đương.","3. Gây hẹp tịt lòng ống dẫn: Tiết diện đường ống dắt thu nhỏ chậm rãi chặn dòng, làm giảm sụt áp lực sử dụng nước tại các sen tắm massage đầu phun lớn."]},{id:"art28",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Than hoạt tính trong hệ lọc tổng có tác dụng gì?",description:"Than hoạt tính giúp giảm clo dư, mùi và một phần hợp chất hữu cơ trong nước sinh hoạt.",image:"https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"28 Tháng 04, 2026",content:["In trong hệ sườn lọc nước trung tâm đa cột, cột lọc chứa vật liệu Than Hoạt Tính (Activated Carbon Core) luôn được coi là chốt chặn xử lý hóa học quan trọng nhất.","Với cấu trúc hàng triệu vi liên kết rỗng tạo diện tích bề mặt tiếp xúc vô song hạt than sấy, vật liệu này mang lại chức năng cực kỳ đắt giá:","1. Hấp thụ triệt để lượng clo dư và chloramine độc hại: Loại bỏ hoàn toàn mùi khử trùng hăng nồng nặc sặc sụa của nước đô thị, giải phóng cảm giác dịu nhẹ thoải mái trong lành khi xả bồn nằm ngủ khí.","2. Lọc khử mùi hôi nấm mốc hữu cơ hòa tan: Loại bỏ triệt để các hợp chất hữu cơ bay hơi VOCs xâm lấn bể mái bể chứa.","WWCo cam kết chọn than gáo dừa hoạt hóa độ tẩm sấy cao cấp nhập khẩu trực tiếp từ Nhật Bản, độ tơi xốp tối ưu bền vững gấp nhiều lần than thông thường dạng vụn mỏng dễ nát rã rớt."]},{id:"art29",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Hệ làm mềm nước có cần thiết cho biệt thự không?",description:"Hệ làm mềm nước phù hợp với công trình có độ cứng cao, nhiều thiết bị vệ sinh cao cấp hoặc hệ nước nóng trung tâm.",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"22 Tháng 04, 2026",content:["Lắp đặt hệ lọc làm mềm nước (Water Softener) bằng hạt cation kẽm trao đổi ion thường là khoản đầu tư có giá thành cao nhất trong trạm xử lý lọc tổng ngôi biệt thự.","Để quyết định xem căn villa biệt thự của gia đình có thực sự cần module lọc làm mềm này hay không, gia chủ hãy tham khảo 3 điều kiện kỹ thuật cốt lõi sau:","1. Kết quả kiểm tra xét nghiệm mẫu nước cứng: Nếu nồng độ Ca2+ ghi nhận vượt trị số 100mg/lít, đây là ngưỡng nước cứng gây bám cặn trắng lên vách kính vòi sen Grohe rất rõ nét sau một tháng.","2. Công trình của gia chủ trang bị hệ thống nước nóng trung tâm Heat Pump: Nước nóng thúc đẩy quá trình kết tủa canxi cacbonat nhanh gấp 4 lần nước lạnh bình thường. Lắp hệ sưởi cấp Heat Pump bắt buộc phải kết hợp làm mềm nước để cứu dàn máy nén thoát tắc nghẽn tàn phá.","3. Đáp ứng chất lượng về cảm nhận chăm sóc da lông: Nước mềm giúp xà phòng tạo bọt trơn mịn tự nhiên, giặt quần áo mềm sợi tơi xốp không bị xơ cứng nhăn."]},{id:"art30",category:"filtration",categoryLabel:"Lọc nước trung tâm",title:"Vì sao hệ lọc nước cần có đường xả rửa đúng kỹ thuật?",description:"Đường xả rửa giúp hệ lọc tự làm sạch vật liệu, duy trì lưu lượng và hạn chế tắc nghẽn trong quá trình vận hành.",image:"https://images.unsplash.com/photo-1585418694458-dc809e120202?auto=format&fit=crop&w=800&q=80",readTime:"4 phút đọc",date:"18 Tháng 04, 2026",content:["Hệ thống lọc nước tổng biệt thự hoạt động giống như một tấm giáp che chở ngăn bùn, không rỉ sét và canxi bám dính bẩn vào nhà. Sau một chu kỳ lọc nhất định, lượng tạp chất bị găm nén lại trong hạt vật liệu lọc là vô cùng khổng lồ.","If không trang bị đường nước xả sút rửa thiết kế chuẩn chỉ kích thước, mớ tạp chất này sẽ bị ứ nghẽn bão hòa và phá lỏng hiệu năng lọc nước.","Một đường xả rửa đúng quy chuẩn kỹ thuật thiết kế bởi WWCo bao gồm các nguyên nhân:","1. Đảm bảo thoát nước tự do nhanh chóng giờ xả rửa lớn: Van tự động sục ngược sút rác cát bẩn cần lưu lượng thoát tự do phi lớn đến 5m³/giờ không nghẽn ứ dột.","2. Hãm áp xả hồi ngược an toàn cho vật liệu: Đường xả cần uốn cong có bẫy hơi thông khí tránh dòng chảy ngắt âm tạo chênh áp làm hạt nhựa cation trôi tuột theo ống xả ra cống bảo vệ lãng phí."]},{id:"art31",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Sưởi sàn nước nóng nên làm ở những khu vực nào trong biệt thự?",description:"Sưởi sàn phù hợp với phòng khách, phòng ngủ, khu sinh hoạt chung và các không gian nghỉ dưỡng tại miền Bắc.",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"12 Tháng 04, 2026",content:["Hệ sưởi sàn thủy lực Hydronic nước nóng tạo cảm giác ấm ngọt như tia nắng dịu mùa xuân, tỏa đều từ ngón chân đi trần mộc mạc thư thái cực đỉnh.","Tuy nhiên, do chi phí lắp đặt hệ sưởi thủy lực tương đối lớn, việc phân bổ quy hoạch sưởi sàn theo khu vực trong công năng biệt thự mang lại hiệu quả cao cùng kinh phí tối ưu nhất:","1. Phòng khách lớn tầng một và khu vực sinh hoạt chung thông tầng: Đây là bộ mặt tiếp khách trung tâm của toàn gia đình, có diện tích kính mở thoáng lớn tràn hơi lạnh mùa đông nên sưởi sàn nước nóng là tấm rèm sưởi giữ nhiệt tối mưu bậc nhất.","2. Các phòng ngủ chính của gia đình (Master Bedrooms): Đôi bàn chân sờ chạm nền ấm lót gỗ tự nhiên mượt trước khi lên giường ngủ lấp đầy giấc say yên lành, đặc biệt hữu ích chống lạnh buốt xương người cao tuổi và ngăn viêm phổi.","3. Phòng tắm VIP có bồn tắm nằm: Loại bỏ hoàn toàn sự run rẩy buốt lạnh khi bước ra khỏi bồn tắm đá trên nền gạch hoa giá buốt khô sờ tủ."]},{id:"art32",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Sưởi sàn nước nóng cần phối hợp với kiến trúc từ giai đoạn nào?",description:"Sưởi sàn liên quan đến cao độ nền, lớp hoàn thiện, tuyến ống, manifold và vị trí điều khiển nên cần tính từ sớm.",image:"https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"08 Tháng 04, 2026",content:["Để trang bị được trạm sưởi nhiệt sàn thủy lực chạy nước ấm dịu cao nhã, việc phối hợp đồng bộ kết cấu thiết kế giữa WWCo, Đội Thiết kế Kiến trúc sư và Kỹ sư MEP thô cần diễn ra ngay khi lập bản vẽ móng dầm đợt thô.","Các mối nối phối kỹ thuật liên kết đan cài bao gồm:","1. Căn lề hạ cốt âm nền sàn bê tông lót thô: Để tránh bị cộm chênh cửa rào dầm, độ cốt sàn thô tại các phòng có sưởi sàn thủy lực buộc phải âm thấp hơn 90mm đến 110mm so với mặt sàn chuẩn không sưởi. Khoảng trống này để lắp đặt hệ phễu xốp bọc bảo ôn cách nhiệt, lưới kẹp ống sưởi PEX đan đều tâm 15-20cm.","2. Lựa chọn lớp phủ vật liệu hoàn thiện mặt sàn sưởi: Gạch đá tự nhiên ceramic truyền nhiệt và chịu giãn nở cốt nền tốt nhất. Nếu gia chủ chọn gỗ tự nhiên, thợ thi công móng cần chọn gỗ biến tính sấy lò hoặc gỗ engineer đạt chuẩn chịu sưởi nóng không cong vênh nứt rạn lớp màng sơn bả."]},{id:"art33",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Manifold trong hệ sưởi sàn nước nóng có vai trò gì?",description:"Manifold giúp chia tuyến ống sưởi, điều chỉnh lưu lượng và kiểm soát nhiệt độ theo từng khu vực.",image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"02 Tháng 04, 2026",content:["Trong bức tranh công nghệ sưởi sàn tuần hoàn thủy lực cao cấp, cụm chia điều phối Manifold (Bộ chia sưởi nước nóng) đóng vai trò trung khu thần kinh kiểm soát phân phối dòng chảy ấm áp.","Nhiệm vụ của cụm chia Manifold là chia đều nguồn nước nóng dẫn từ phòng máy sưởi ấm chính đến từng vòng ống sưởi PEX lắp ẩn sâu sắc dưới sàn hoa sảnh:","1. Cân bằng lưu lượng dòng thủy lực tự động: Nhờ các cột lưu kế vặn ren tinh tế, kỹ thuật viên tính toán hiệu áp tránh vòng ống ngắn nhận nhiều nước nóng còn vòng ống dài ở xa bị hụt nhiệt.","2. Điều phối độc lập từng phòng zone sưởi bằng động cơ chấp hành (Actuator): Kết nối ghép bộ điều khiển phòng (Thermostat). Khi phòng ngủ Master đạt đủ 24°C, động cơ kẹp van từ ngắt nhịp hồi vòng ống phòng đó để tiết kiệm sưởi lãng phí.","Mọi cụm chia sưởi WWCo thi công đều bọc bằng hợp kim đồng hoặc inox không rỉ cao cấp nhập khẩu của Ý, lắp đặt gọn gàng thanh lịch âm kín sau tủ âm tiện dụng tinh xảo."]},{id:"art34",category:"heating",categoryLabel:"Sưởi sàn nước nóng",title:"Sưởi sàn nước nóng có làm khô không khí không?",description:"Sưởi sàn tạo cảm giác ấm đều từ dưới lên, không thổi gió trực tiếp nên ít gây cảm giác khô như một số hình thức sưởi bằng gió.",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"28 Tháng 03, 2026",content:["Mối lo ngại kinh điển bậc nhất của các gia chủ xứ lạnh khi sưởi ấm mùa đông là cảm giác rát buốt hốc mũi, ngột ngạt ngực khát nước và thô rát da dẻ do dùng điều hòa ấm sấy liên tiếp.","Tuy nhiên, hệ thống sưởi sàn thủy lực dựa trên bức xạ nhiệt tự nhiên giải quyết triệt thế nỗi ám ảnh sụt khô không khí nhờ tính chất vật lý ưu ái khác lạ:","1. Không khuấy động dòng gió cuồng phong nhân tạo: Điều hòa sưởi thổi luồng khí cưỡng bức cưỡng chế cuốn bụi bẩn bay vòng quanh thúc đẩy thất tán nước hơi da dẻ. Sưởi sàn tỏa nhiệt tĩnh bức xạ tự đáy nền, dòng chảy đối lưu vi vút cực êm.","2. Duy trì độ ẩm tương đối của khí thở tự do an lành: Nhờ nền giữ ấm bức xạ nhẹ dịu ở nhiệt độ vừa tầm ấm chân (24°C-27°C), phân tử nước bốc hơi rải rác tự nhiên không bị nung nóng khô nhanh rợn.","Cảm nhận sưởi thủy lực luôn đem lại hơi thở ấm mềm trong trẻo nhất bảo vệ giấc lành ngọc ngà của trẻ nhỏ khỏi mối lo hen suyễn hô hấp buốt giá mùa đông dạt thô hoảng."]},{id:"art35",category:"experience",categoryLabel:"Kinh nghiệm triển khai",title:"Vì sao đội MEP cần tham gia sớm khi làm hệ nước trung tâm?",description:"Đội MEP tham gia sớm giúp kiểm soát tuyến ống, điện cấp nguồn, thoát nước kỹ thuật và tránh xung đột khi thi công.",image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"19 Tháng 03, 2026",content:["Cơ điện nước biệt thự nếu thi công độc lập không ăn khớp thống nhất phối hợp bản vẽ tuyến lót chờ móng Gen thô sẽ hóa thành cơn đau đầu kéo dài triền miên cho kiến trúc thi công biệt thự.","Phối hợp MEP sớm từ vòng lập bản vẽ sơ tuyển đem lại hiệu mưu rõ ràng giúp loại bỏ xung đột thực tế công trường:","1. Tránh khoan cắt đục uốn phá bê tông nén dầm kết cấu: Điểm gen thu chứa sưởi ống tuần hoàn hồi bọc bảo ôn dải dẹt lớn bắt buộc chừa sẵn lỗ gen dầm sàn, nếu không chừa phải khoan đứt thép dầm chịu lực cực kỳ tai hại.","2. Đồng bộ đấu đấu nạp nguồn công suất động lực điện: Sưởi sàn hay Heat Pump dùng bơm nén lớn cần tủ điện dẹp động cơ bảo vệ an toàn riêng, tránh xung đột quá tải làm rớt nhảy sụt áp át tổng tòa nhà biệt thự.","WWCo đồng hành bàn trực tiếp điều phối tiến trình cơ địa MEP thông qua mô hình kỹ thuật chi tiết rõ rệt."]},{id:"art36",category:"hotwater",categoryLabel:"Nước nóng trung tâm",title:"Checklist trước khi lắp đặt hệ nước trung tâm cho biệt thự",description:"Trước khi lắp đặt, cần kiểm tra mặt bằng, điện, nước, thoát sàn, tuyến ống chờ, không gian thao tác và tình trạng thiết bị.",image:"https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",readTime:"5 phút đọc",date:"12 Tháng 03, 2026",content:["Một tiến trình lắp ráp thi công hệ máy sưởi lọc tuần hoàn nước ấm trung tâm WWCo chuẩn chỉ súc gọn gàng trên công trường biệt thự không tự dưng diễn ra êm đẹp trơn tru.","Đó là thành quả của bộ công thức Checklist quản lý tiến trình khảo sát nghiệm thu chi tiết dưới đây trước ngày thả dỡ lắp máy:","1. Đã sẵn sàng cốt móng giếng đổ bệ bê tông phẳng cao cách ly sàn xối: Đủ thiết diện định vị nâng giữ bồn dầm dung tích bảo ôn 500L chứa tải.","2. Có sẵn hố thoát thu nước hở phi lớn cạnh trạm lọc: Gom dòng xối rửa tự động định tuần xả hạt cation nhanh chóng, không gây trào ngược bẩn tràn.","3. Tuyến ống cấp hồi của các tầng dắt chờ tại trạm máy phải kiểm áp an toàn bọc cách nhiệt đạt chuẩn, đảm bảo bọc nén áp hơn 6-8 bar liên tục một tuần thử rò rỉ rạn vỡ móng nứt."]}];

export const enArticles: Article[] = [
  {
    "id": "art1",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "When should a villa use a central hot water system?",
    "description": "Villas with multiple bathrooms, large bathtubs, long pipe runs, or high simultaneous usage often need central hot water for stability and convenience.",
    "image": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "May 25, 2026",
    "content": [
      "In modern luxury villas featuring three or more bathrooms or high-flow fixtures like deep bathtubs and overhead rain showers, local water heaters are often inefficient, bulky, and unsafe.",
      "Here are four key scenarios where a centralized Inverter Heat Pump water heater with built-in return flow is by far the superior choice:",
      "1. Simultaneous Multi-Point Use: Multiple family members returning home from work or sports often bathe around the same time. Compact local tanks quickly run flat, while a central thermal reservoir ensures high flow and rock-solid temperature stability.",
      "2. Luxury Freestanding Bathtubs: Standard tubs require 150 to 300 liters of hot water. A regular local 30L tank isn’t nearly enough, forcing users to wait awkwardly for reheating cycles.",
      "3. Long Structural Pipe Runs: In spacious layouts, distance from mechanical rooms to distant guest quarters easily exceeds 15–30 meters. Leftovers cool in pipes after use, meaning you throw away dozens of fresh liters of cold standing water before getting warm again.",
      "4. Seamless Architecture and Aesthetic Cleanliness: Eliminating giant local water tanks means higher ceiling drops, clean bathroom walls, and room to showcase high-end marble or designer tiles."
    ]
  },
  {
    "id": "art2",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Why does hot water take so long to arrive even with a great heater?",
    "description": "Hot water arrival wait times depend not only on the heat source, but also on piping lengths, return circulation pumps, thermal sensors, and delivery loop layouts.",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "May 18, 2026",
    "content": [
      "Many property owners ask: Why do I still have to wait a couple of minutes for hot water when I have already installed an expensive European Heat Pump worth thousands of dollars?",
      "The problem lies in the pipelines: while the central Heat Pump heats up water and stores it perfectly inside an insulated buffer tank, the water sitting inside structural distribution pipelines leading to the faucets cools down organically when idle.",
      "To get instant hot water, systems require a dedicated active recirculation loop combined with an interactive circulation pump and automatic controllers:",
      "1. Recirculation return line: A dedicated loop running parallel to supply pipes, routing cooled standing water back into the central storage tank.",
      "2. Circulation pump: Activated when a temperature sensor registers that the water inside the pipeline dropped below a pre-set comfort limit (e.g., 38°C). It pushes cold standing water back to the tank and pulls hot water instantly to the faucet.",
      "3. Smart cycle programming: Return pumps do not need to run 24/7 causing plumbing wear and high energy costs. They are programmed based on occupancy times, or paired with smart motion sensors in vanity mirrors to deliver elite comfort seamlessly."
    ]
  },
  {
    "id": "art3",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "How is a Heat Pump different from standard tank water heaters?",
    "description": "A detailed comparison of working principles, thermal capacity, power metrics, and suitability for high-flow residential estates.",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "readTime": "6 min read",
    "date": "May 12, 2026",
    "content": [
      "A Heat Pump is an advanced thermodynamic energy harvester, operating on the principle of shifting free heat energy from the surrounding atmosphere rather than burning high-current electrical resistance to generate raw heat directly.",
      "Here are the core engineering differences between the two systems:",
      "1. Heating mechanism: Standard heaters pass high electric current directly through a metal heating element inside the tank (similar to raw boiling coils). A Heat Pump pulls low-grade ambient atmospheric heat via a fan, compresses a specialized refrigerant to magnify heat, and transfers it to water safely via a closed coil exchanger.",
      "2. System efficiency (COP): Because it harvests free atmospheric warmth, a Heat Pump achieves a Coefficient of Performance (COP) up to 3.8 to 4.5. Every 1 kW of electrical energy used unlocks up to 4.5 kW of heat, cutting overall hot-water utility bills by 75% to 82%.",
      "3. Absolute safety: Completely eliminates the risks associated with high-current electrical elements in direct contact with your bath water.",
      "4. Sizing factor: Conventional water heaters are restricted to localized 15L to 50L units for single shower cubicles, whereas central Heat Pumps utilize 200L to 500L storage tanks for whole-mansion coverage."
    ]
  },
  {
    "id": "art4",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "What is a hot water return pump and when is it needed?",
    "description": "Clarifying the specific role of active return circulation to slash hot water latency in distant bathroom layouts.",
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "May 05, 2026",
    "content": [
      "An active hot water return pump is a specialized recirculation device regulating hydraulic temperature profiles in estate central plumbing systems.",
      "The pump's main duty is to eliminate initial cold margins of water, ensuring instant delivery at shower valves.",
      "We recommend deploying a return loop whenever your property meets any of the following criteria:",
      "1. Horizontal pipelines exceed 8 meters: Faucets located more than 8 meters from the boiler tank lose active heat rapidly when unused.",
      "2. Multistory layouts: Elevational height differences increase static columns of cooling water, which can be easily resolved using an active return loop.",
      "3. Custom controls: WWCo return pumps use automated thermo-cycles to optimize efficiency and extend motor lifespan."
    ]
  },
  {
    "id": "art5",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Why is piping design more important than choosing a oversized water heater?",
    "description": "An analysis of plumbing routing, volumetric pressures, friction losses, and loop balancing for flawless delivery.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Apr 28, 2026",
    "content": [
      "Simply purchasing a oversized central Heat Pump and massive tanks is not enough to guarantee a consistent, premium water experience.",
      "In practice, the water pressure and temperature stability at the faucet depend heavily on custom hydraulic calculations and network layouts.",
      "Poorly designed systems often experience several common issues:",
      "1. Sudden system pressure drops when multiple showers run at once, leading to temperature fluctuations.",
      "2. Thermal losses along pipes lacking high-grade thick insulation, causing the Heat Pump to reheat water unnecessarily.",
      "WWCo designs systems with premium insulated piping and self-regulating valvs to ensure uniform thermal delivery."
    ]
  },
  {
    "id": "art6",
    "category": "filtration",
    "categoryLabel": "Central water filtration",
    "title": "Is a whole-house water filtration system necessary for villas?",
    "description": "Examining why point-of-entry water filtration is critical to trap sand, chlorine, municipal rust, and hard mineral deposits.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Apr 22, 2026",
    "content": [
      "While municipal tap water meets initial drinking and bathing safety definitions, it often picks up secondary pollutants during transport.",
      "Rust flakes from aging public water mains, chemical chlorine residues, and mineral scale pose ongoing maintenance and comfort challenges.",
      "Installing a premium central filtration system provides several key benefits:",
      "1. Deep sediment removal: Multi-bed media vessels trap suspended rust particles, fine clays, and micro-debris.",
      "2. Chlorine and odor absorption: Extracted chlorine protects skin, prevents hair damage, and eliminates chemical odors.",
      "3. Advanced water softening: Removes hard calcium and magnesium minerals to prevent scale buildup on expensive Grohe and Kohler bathroom fixtures."
    ]
  },
  {
    "id": "art7",
    "category": "filtration",
    "categoryLabel": "Central water filtration",
    "title": "Central filtration vs. point-of-use drinking systems: What's the difference?",
    "description": "Understanding how whole-house water processing works hand-in-hand with kitchen under-sink drinking-water purification.",
    "image": "https://images.unsplash.com/photo-1585418694458-dc809e120202?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "Apr 15, 2026",
    "content": [
      "Whole-house and point-of-use drinking water systems have distinct, complementary roles in a modern residential water setup.",
      "Understanding their differences is key to planning your system:",
      "1. Scale and capacity: Central filtration manages high flow rates (2.5 to 4.0 m³/hr) to clean all water enters the home. Under-sink drinking filters process smaller volumes (15L/hr) for cooking and drinking.",
      "2. Filtration level: Central systems remove sediment down to 1–5 microns or 0.01 microns with ultrafiltration. Kitchen RO systems filter at a much finer 0.0001-micron level to remove dissolved salts and minerals.",
      "Using a central filtration system helps protect and extend the life of your kitchen drinking-water filters."
    ]
  },
  {
    "id": "art8",
    "category": "filtration",
    "categoryLabel": "Central water filtration",
    "title": "How hard water quietely damages luxury bathroom fittings",
    "description": "Analyzing the chemical scaling effects of calcium and magnesium on designer luxury bathroom equipment.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c755?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Apr 08, 2026",
    "content": [
      "Hard water contains elevated concentrations of dissolved calcium and magnesium ions.",
      "Over time, these minerals can cause significant, costly scaling problems throughout your home:",
      "1. Dull, stained bathroom fixtures: Mineral deposits leave white, chalky build-ups on glass-panels and premium chrome taps.",
      "2. Reduced Heat Pump efficiency: Scaling blankets heating elements, forcing systems to consume more power.",
      "3. Restricted pipe flow: Calcium scale forms inside pipelines, narrowing pathways and reducing water pressure.",
      "WWCo's water softeners use premium resin exchange media to neutralize these scale-forming minerals."
    ]
  },
  {
    "id": "art9",
    "category": "filtration",
    "categoryLabel": "Central water filtration",
    "title": "Why do whole-house water filters require scheduled backwash cycles?",
    "description": "How automated backwash and rinse schedules keep water filtration systems running cleanly and efficiently.",
    "image": "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "Apr 02, 2026",
    "content": [
      "Like any filter, whole-house columns capture and hold raw sediments, dirt, and metals.",
      "Without regular cleaning, these trapped materials saturate the system, restricting water flow and reducing filtration quality.",
      "Automated backwash and rinse cycles are essential to maintain performance:",
      "1. Flushing trapped sediments: Reverses water flow to wash away captured rust and grit.",
      "2. Regenerating softening resin: Restores the softening media's capacity to remove calcium and magnesium.",
      "WWCo systems feature automated, user-friendly control valves that run silently at night to minimize disruption."
    ]
  },
  {
    "id": "art10",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Which residential properties are best suited for hydronic underfloor heating?",
    "description": "A comprehensive look at why hydronic subfloor heating systems are perfect for mountain villas and Northern climates.",
    "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Mar 26, 2026",
    "content": [
      "Hydronic floor heating systems represent one of the most comfortable warming technologies used in modern high-end homes.",
      "These systems are particularly well-suited for several types of projects:",
      "1. Homes in cold, damp climates, such as Northern Vietnam, Hanoi, or mountain retreats like Tam Dao and Ba Vi.",
      "2. Families with children or seniors sensitive to dry air, as hydronic heating warms without blowing dry, dust-laden air.",
      "3. Large, open spaces with high ceilings, where heat radiates evenly starting from the floor up."
    ]
  },
  {
    "id": "art11",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Why underfloor heating systems must be coordinated during early shell design",
    "description": "Analyzing standard subfloor elevation constraints, plumbing layouts, manifolds, and insulation requirements.",
    "image": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Mar 19, 2026",
    "content": [
      "Hydronic floor heating must be planned well before laying floors and finishing walls.",
      "Early integration is critical due to important structural and mechanical requirements:",
      "1. Floor height adjustments: The heating layer, including insulation foam and PEX piping, adds 80–100mm to the floor height, requiring early adjustments to concrete slabs.",
      "2. Manifold cabinetry: Recessed wall cabinets must be placed early to house the zone flow manifolds.",
      "WWCo coordinates with architects early in the design phase to avoid complex structural adjustments later."
    ]
  },
  {
    "id": "art12",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Hydronic floor heating vs. forced-air heat pumps: A comfort comparison",
    "description": "How quiet, dust-free hydronic radiant heat compares with drafty and dry dual-split AC conditioning climates.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Mar 12, 2026",
    "content": [
      "While traditional AC systems can heat spaces, hydronic underfloor heating offers superior comfort for luxury homes:",
      "1. True radiant comfort: Warms the room from the feet up, matching the body's natural thermal preferences.",
      "2. Silent and dust-free: Operates with no fans, eliminating noise and preventing dust from circulating.",
      "3. Long-term energy efficiency: Warm water holds heat in the floor slab, keeping rooms warm with less power."
    ]
  },
  {
    "id": "art13",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "Why detailed MEP coordination saves thousands in custom luxury renovations",
    "description": "The immense business value of aligning core mechanical, electrical, and plumbing trades before hardware ships.",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Mar 05, 2026",
    "content": [
      "A home's mechanical, electrical, and plumbing (MEP) setup is the core of its daily operation, requiring careful planning to avoid post-renovation issues.",
      "Common issues from uncoordinated MEP include:",
      "1. Misaligned sleeves and drains that complicate filtration system backwashing.",
      "2. Inadequate access room for filter changes, making routine servicing difficult.",
      "WWCo provides detailed 3D layouts and matches setup plans with contractors before starting work."
    ]
  },
  {
    "id": "art14",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "Top items to cover when preparing custom water technical plant rooms",
    "description": "A complete checklists for builders: space loads, floor drain configurations, 3-phase power allocations, and acoustic dampers.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "Feb 26, 2026",
    "content": [
      "A well-planned mechanical room extends equipment life and simplifies maintenance for years to come.",
      "Essential details to address during design include:",
      "1. Sufficient space allocation: Plan for at least 2.5–4.5 m² of clear floor area with good access paths.",
      "2. Structural weight capacity: Ensure floors can support heavy 500L central hot-water tanks.",
      "3. High-capacity floor drains: Install durable, fast-flowing drains to handle system flushing."
    ]
  },
  {
    "id": "art15",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "The elements of error: 3 fatal mistakes in custom estate hot-water setups",
    "description": "Failing to loop return systems, picking low-end valves, or skipping plant room soundproofing: How to avoid them.",
    "image": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Feb 19, 2026",
    "content": [
      "With years of experience upgrading and correcting central hot-water installations, we have identified three common issues:",
      "1. Failing to plan return piping loops, which leads to slow water delivery and high standby losses.",
      "2. Using thin-walled tanks that are prone to leaking under standard operating temperatures.",
      "Working with WWCo ensures proper layout calculations and high-grade materials to prevent these issues."
    ]
  },
  {
    "id": "art16",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "Concrete limits: Why delaying your villa water planning is a costly mistake",
    "description": "How waiting until architectural walls or bathrooms are completed limits your mechanical options.",
    "image": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "Feb 12, 2026",
    "content": [
      "Designing water filtration and heating layouts late in construction often leads to compromises.",
      "Planning central water networks early helps avoid several common setbacks:",
      "1. Needing to cut through concrete slabs or premium stonework to add missed piping.",
      "2. Technical chases that are too narrow for properly insulated hot-water lines.",
      "WWCo recommends starting water system design early alongside structural blueprints."
    ]
  },
  {
    "id": "art17",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "Vì sao biệt thự nên tính toán hệ nước ngay từ giai đoạn thiết kế?",
    "description": "Hệ nước trung tâm cần được tính từ sớm để bố trí phòng kỹ thuật, tuyến ống, điện cấp nguồn, thoát nước và không gian bảo trì phù hợp.",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "02 Tháng 06, 2026",
    "content": [
      "Hệ nước trung tâm trong các căn biệt thự bao gồm giải pháp nước nóng Heat Pump, lọc nước tổng đầu nguồn và sưởi ứng dụng nhiệt thủy lực. Đây không phải là những module lắp ghép nhỏ lẻ có thể tùy tiện gắn sau khi hoàn thiện công trình.",
      "Việc tính toán hệ nước ngay từ giai đoạn sơ đồ nguyên lý kiến trúc là điều quyết định tính thẩm mỹ, hiệu năng và tránh lãng phí ngân sách đục phá sau này. Những nguyên nhân mấu chốt bao gồm:",
      "1. Đảm bảo cao độ nền và kết cấu thô: Các hệ thống sưởi sàn nước nóng cần từ 80mm đến 100mm chiều cao thô của sàn để bố trí các lớp xốp cách nhiệt, lưới định vị, tuyến cấp ống PEX và lớp bê tông cán truyền nhiệt. Nếu không trừ cao độ ngay lúc đổ sàn, cao độ cửa đi và chiều rộng bậc thang sẽ bị biến đổi nguy hiểm.",
      "2. Bố trí tuyến cấp nguồn điện và hộp kỹ thuật (hộp gen) đồng bộ: Trạm bơm nhiệt Heat Pump thường có công suất ngốn diện và cần điện động cơ 3 pha an toàn riêng. Đường ống dẫn nước bảo ôn bọc Polyurethane cũng có đường kính lớn gấp đôi ống thông thường, cần hộp kỹ thuật đủ rộng để uốn và dẫn ống.",
      "3. Quy hoạch không gian vận hành và thoát nước kỹ thuật: Hệ lọc tổng cần đường nước thải phi lớn để sục xả hạt cation và xả rỉ bùn. Nếu không chừa ống xả cơ điện riêng biệt, nước thải có nguy cơ trào ngược hư hỏng sàn hoa sảnh."
    ]
  },
  {
    "id": "art18",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "Phòng kỹ thuật hệ nước trong biệt thự cần chuẩn bị những gì?",
    "description": "Một phòng kỹ thuật tốt cần đủ diện tích, thoát nước, điện, thông gió, khoảng thao tác và lối tiếp cận để bảo trì.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "01 Tháng 06, 2026",
    "content": [
      "Phòng kỹ thuật (Mechanical Room) là trái tim vận hành toàn bộ hệ cơ điện nước của biệt thự, là nơi đặt các thiết bị xử lý lọc nước chính, bình tích nhiệt, Heat Pump trung tâm, bơm tuần hoàn áp bồn sấy và tủ cấp điều khiển.",
      "Để đảm bảo thiết bị vận hành hiệu quả tới trên 15 năm và dễ dàng bảo dưỡng súc rửa, phòng kỹ thuật cần được quy hoạch chuẩn chỉ theo các tiêu chí sau:",
      "1. Diện tích mặt sàn trống tối thiểu: Một không gian tối ưu cần từ 3m² đến 6m² tùy vào số lượng tầng và phòng tắm cần cấp. Cần đảm bảo khoảng thao tác trống rộng rãi ít nhất 60cm phía trước các cột lọc tổng đầu nguồn để thợ kỹ thuật có thể mở van tháo dỡ định kỳ chuyển hạt nhựa cation.",
      "2. Đổ bệ nền bê tông vững chắc: Bồn bảo ôn tích chứa nhiệt nóng từ 300L - 500L chứa đầy nước sẽ nặng từ 400kg đến 600kg. Do đó, cần đổ bệ bê tông vững chãi giật cấp cao 10-15cm so với mặt nền sút xối nước để cách ly ẩm ướt và chịu lực an toàn lâu dài.",
      "3. Thiết bị cấp thoát nước thải lưu lượng lớn: Quá trình xả rửa ngược cột lọc cần lưu thông nước rất nhanh. Phòng kỹ thuật buộc phải có phễu thu sàn tối thiểu phi 75 để gom dòng nước xả xối lớn, tránh nguy cơ tràn ứ ra khu vực lân cận."
    ]
  },
  {
    "id": "art19",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Những lỗi thường gặp khi làm hệ nước nóng cho biệt thự",
    "description": "Thiếu đường hồi, chọn sai dung tích bồn, bố trí tuyến ống quá xa và thiếu không gian bảo trì là những lỗi thường gặp.",
    "image": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "30 Tháng 05, 2026",
    "content": [
      "Hệ cấp sưởi nước nóng trung tâm sử dụng bơm nhiệt Heat Pump là lựa chọn hàng đầu cho biệt thự hiện đại. Tuy nhiên, nếu thiếu tính toán kỹ thuật chiều sâu trong thiết kế móng mỏ, hệ thống sẽ bộc lộ nhiều nhược điểm gây phiền toái lớn cho gia chủ.",
      "WWCo tổng hợp các sai sót thường thấy nhất trên công trường thực tế:",
      "1. Thiếu đường ống hồi và bơm tuần hoàn hồi nước nóng: Đây là lỗi phổ biến nhất. Điều này khiến nước đọng nguội trong ống chính. Khi gia chủ mở vòi tắm ở tầng 3, tầng 4, họ sẽ phải xả bỏ từ 20L đến 50L nước lạnh buốt trong vòng vài phút trước khi có nước ấm, gây lãng phí nguồn tài nguyên nước cực kỳ bất tiện.",
      "2. Chọn sai dung tích bồn bảo ôn hoặc công suất sấy của Heat Pump: Chọn bồn quá nhỏ dựa theo cảm tính khiến gia đình bị hụt nước nóng trong giờ cao điểm khi nhiều phòng tắm cùng xả bồn nằm. Chọn máy quá lớn lại gây lãng phí chi phí đầu tư, tốn diện năng vận hành dư thừa.",
      "3. Tuyến ống dài không bọc bảo ôn cách nhiệt chất lượng: Do không bọc lớp foam Polyurethane dày dặn, nhiệt lượng từ ống nước nóng truyền thẳng ra hộp kỹ thuật và vách bê tông, làm máy Heat Pump phải khởi động liên tục suốt ngày đêm."
    ]
  },
  {
    "id": "art20",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Bồn tích nhiệt trong hệ nước nóng trung tâm có vai trò gì?",
    "description": "Bồn tích nhiệt giúp lưu trữ nước nóng, ổn định nhiệt độ và đáp ứng nhu cầu sử dụng trong giờ cao điểm.",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "28 Tháng 05, 2026",
    "content": [
      "Trong hệ nước nóng trung tâm Heat Pump, bồn bảo ôn tích nhiệt (Water Storage Tank) đóng vai trò lá phổi dự trữ năng lượng then chốt của toàn dự án.",
      "Nguyên lý vận hành cốt lõi là máy bơm nhiệt sẽ đun nước từ từ và tích nén vào bồn bảo ôn cách nhiệt để gia chủ sử dụng tức thì khi có nhu cầu.",
      "Bồn tích nhiệt chất lượng cao mang lại những giá trị quan trọng dưới đây:",
      "1. Đảm bảo lưu lượng đỉnh giờ cao điểm: Khi cả gia đình cùng trở về nhà tắm rửa vào lúc 19h-20h, bồn tích nhiệt sẽ xả lượng nước nóng dồi dào dự trữ sẵn có mà không gây suy giảm lưu lượng hay sụt áp lực dòng chảy.",
      "2. Kéo dài tuổi thọ cho máy nén Heat Pump: Nhờ có bồn tích nhiệt chứa nước nóng cực đại, máy Heat Pump chỉ cần khởi chạy 1-2 lần mỗi ngày để gia nhiệt toàn bình, tránh tình trạng máy nén phải đóng ngắt liên tục mỗi khi có ai đó mở vòi rửa tay nhẹ.",
      "3. Giảm thất thoát nhiệt năng ra môi trường: Bồn bảo ôn chính hãng WWCo thiết kế lớp bọt xốp Polyurethane đúc dày đến 50mm, giúp giữ nhiệt độ ấm áp của nước nóng hao hụt không quá 2°C trong vòng 24 giờ."
    ]
  },
  {
    "id": "art21",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Bơm hồi nước nóng giúp giảm thời gian chờ như thế nào?",
    "description": "Bơm hồi giúp duy trì nước ấm trên tuyến ống chính, giảm thời gian chờ tại các phòng tắm xa phòng kỹ thuật.",
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "24 Tháng 05, 2026",
    "content": [
      "Sở hữu một phòng tắm lát đá marble sang trọng với trang thiết bị sen vòi âm tường trị giá hàng ngàn USD, nhưng nếu mở vòi ra phải chờ 2 phút lạnh buốt mới ấm nóng, trải nghiệm tiện nghi của biệt thự sẽ sụt giảm nghiêm trọng.",
      "Đó là lý do đường tuần hoàn nước nóng phối hợp bơm hồi nước nóng (Recirculation unit) được coi là tiêu chuẩn bắt buộc cho phân khúc biệt thự cao cấp:",
      "1. Nguyên lý tuần hoàn hồi: Khi áp dòng trên trục ống cấp nước bị hạ nhiệt độ xuống dưới mức 38°C hoặc 40°C do thời gian dài không dùng, cảm biến nhiệt kế lập tức ghi nhận tín hiệu và báo về bộ điều khiển.",
      "2. Kích hoạt bơm hồi tự động: Bơm đẩy lượng nước đọng dính nguội trong ống theo đường tuyến hồi dội ngược lại bồn bảo ôn đun sấy lại, kéo dòng nước sưởi nóng ở trong bồn lấp đầy tuyến ống dắt ngay sát vách tắm.",
      "3. Các phương án điều khiển tiết kiệm năng lượng: Để tránh bơm hồi chạy làm tiêu hao nhiệt lượng liên miên, WWCo lập trình bơm chạy theo chế độ hẹn giờ tùy biến (khung giờ tắm sáng và tối của gia đình), kết hợp cảm biến dòng chảy thông minh."
    ]
  },
  {
    "id": "art22",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Tại sao nước nóng trung tâm cần tính lưu lượng sử dụng đồng thời?",
    "description": "Không phải tất cả thiết bị đều dùng cùng lúc, nhưng cần tính đúng hệ số sử dụng để chọn công suất và dung tích phù hợp.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "22 Tháng 05, 2026",
    "content": [
      "Khi thiết kế hệ nước nóng trung tâm cho biệt thự, sai lầm lớn nhất của các đơn vị thiếu chuyên môn là cộng dồn cơ học lưu lượng của tất cả thiết bị tắm rồi lựa chọn công suất máy cho công trình.",
      "Ví dụ: Biệt thự có 5 phòng tắm, mỗi sen ấm tiêu hao 15L/phút, tổng cộng là 75L/phút. Thiết kế máy theo lưu lượng cực đại này sẽ dẫn đến chi phí đầu tư khổng lồ, thiết bị quá cỡ tốn kém diện tích đặt để.",
      "Quy trình xử lý tính toán của WWCo thông qua hệ số đồng thời (Simultaneous factor):",
      "1. Tính toán xác suất sử dụng thực tế: Thực tế cho thấy không bao giờ tất cả 5 phòng tắm cùng dùng sen vòi xả tối đa công suất ở cùng một giây phút. Hệ số dùng nước đồng thời thông thường dao động từ 0.3 đến 0.45.",
      "2. Tính toán nhu cầu dự phòng đỉnh: Việc tính lượng nước tiêu dùng cao nhất trong 1 tiếng tập trung (Peak hour demand) giúp lựa chọn chính xác dung tích bồn trữ bảo ôn, phân bổ nhiệt lượng hợp lý, tiết kiệm lớn đến 40% chi phí đầu tư thiết bị."
    ]
  },
  {
    "id": "art23",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Heat Pump có phù hợp với biệt thự miền Bắc không?",
    "description": "Heat Pump có thể phù hợp với biệt thự miền Bắc nếu được chọn đúng công suất, dung tích bồn và phương án vận hành.",
    "image": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "15 Tháng 05, 2026",
    "content": [
      "Khí hậu miền Bắc với mùa đông lạnh buốt, nhiệt độ ngoài trời có thể hạ sâu dưới 10°C, kèm theo hiện tượng mưa phùn và nồm ẩm là thử thách lớn đối với mọi giải pháp cấp nước nóng sinh hoạt.",
      "Hệ máy bơm nhiệt Heat Pump vận hành bằng cách hấp thu năng lượng từ khí quyển xung quanh, do đó khi nhiệt độ trời miền Bắc lạnh sâu vào tháng Một, hiệu năng COP của máy nén sẽ sụt giảm nhẹ.",
      "Tuy nhiên, Heat Pump vẫn là giải pháp cực kỳ tối ưu cho biệt thự miền Bắc nhờ các biện pháp thiết kế phối ghép vượt trội sau:",
      "1. Tính toán tăng cường bù công suất sưởi cực đại: WWCo luôn chọn máy nén Heat Pump có dải nhiệt sưởi rộng và tích hợp bộ điện trở gia nhiệt dự phòng thông minh (Back-up Heater). Phụ trợ này tự động kích hoạt bù nhiệt khi ngoài trời lạnh cực đoan.",
      "2. Tăng cường lớp giữ nhiệt bồn chứa: Với mùa đông buốt lạnh, độ thất thoát nhiệt qua thành bồn bảo ôn tăng cao, đòi hỏi bồn sấy phải chế tạo đạt tiêu chuẩn xuất khẩu châu Âu với bảo ôn định hình mật độ cao (High density Polyurethane)."
    ]
  },
  {
    "id": "art24",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Nên đặt Heat Pump và bồn nước nóng ở đâu trong biệt thự?",
    "description": "Vị trí đặt thiết bị ảnh hưởng đến tiếng ồn, bảo trì, chiều dài đường ống, thoát nước và hiệu quả vận hành.",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "10 Tháng 05, 2026",
    "content": [
      "Vị trí thi công lắp đặt trạm trung tâm sưởi ấm nước Heat Pump đòi hỏi sự phối hợp khắt khe giữa kiến trúc kỹ thuật nội ngoại thất và kỹ sư MEP.",
      "Một vị trí bố trí thiết bị hoàn hảo cần đáp ứng đồng bộ 3 tiêu chuẩn cốt lõi sau:",
      "1. Đảm bảo thông thoáng cho luồng gió của Heat Pump: Bản chất máy bơm nhiệt hoạt động giống chiếc điều hòa ngược chiều, cần hút khí nóng ngoài trời và thổi khí hàn ra ngoài. Do vậy, dàn nóng của máy phải đặt ở không gian thông thoáng (sân phơi mái, ban công kỹ thuật rộng), không đặt ở trong góc hẹp bị bít hãm khí rào.",
      "2. Giờ cách âm chống rung tiếng ồn ban đêm: Máy nén có phát tiếng ồn rung nhẹ khi sụt chạy gia nhiệt lớn. Tránh gắn thiết bị sát dầm vách chung tường của phòng ngủ chính. Nên thi công đế đệm cao su giảm chấn triệt tiêu âm truyền.",
      "3. Khoảng cách dắt ống kỹ thuật đến trục đứng: Vị trí đặt máy sưởi càng gần hộp gen trục đứng trung tâm trục đứng chính của tòa nhà càng giúp rút ngắn hành trình cấp hồi, tiết kiệm nhiệt thất thoát tối đa."
    ]
  },
  {
    "id": "art25",
    "category": "filtration",
    "categoryLabel": "Central filtration",
    "title": "Lọc nước trung tâm xử lý những vấn đề gì trong nước sinh hoạt?",
    "description": "Hệ lọc trung tâm thường xử lý cặn bẩn, clo dư, mùi, màu và độ cứng tùy theo chất lượng nước đầu vào.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "08 Tháng 05, 2026",
    "content": [
      "Hệ lọc nước trung tâm đầu nguồn (Whole-house Filtration System) đóng vai trò lá chắn bảo vệ toàn bộ ngôi nhà khỏi tác nhân có hại hòa tan trong nguồn nước sinh hoạt gia đình.",
      "Khác với các máy RO gầm tủ bếp chỉ làm nhiệm vụ lọc uống, lọc nước tổng đầu nguồn xử lý trực tiếp ba tầng vấn đề chính sau:",
      "1. Loại bỏ cặn thô, hạt bùn mịn cát rỉ sét rỉ bám: Nhờ tầng lọc đa cát thạch anh bọc cát quặng hoạt tính giữ lại tất cả dị chất lơ lửng sủi, tránh lắng cặn rỉ bám dưới đáy bồn trữ bể ngầm.",
      "2. Khử sạch lượng clo dư hóa học cực độc: Clo là chất tẩy trùng bắt buộc dùng trong nước đô thị, nhưng dư thừa clo thường gieo rắc mùi hăng nồng nặc, bào mòn nứt da, xơ thô tóc xơ sợi chân lông gia đình.",
      "3. Xử lý triệt để nước cứng vôi canxi: Hệ cation sút rửa hạt trao đổi ion hấp thụ hoàn toàn ion Ca2+, Mg2+ tạo độ dính xỉ vôi canxi, đem lại dòng nước mềm mại bảo vệ thiết bị cao cấp."
    ]
  },
  {
    "id": "art26",
    "category": "filtration",
    "categoryLabel": "Central filtration",
    "title": "Vì sao cần xét nghiệm nước trước khi chọn hệ lọc tổng?",
    "description": "Chất lượng nước đầu vào quyết định cấu hình lọc, vật liệu lọc và phương án vận hành của toàn hệ thống.",
    "image": "https://images.unsplash.com/photo-1585418694458-dc809e120202?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "05 Tháng 05, 2026",
    "content": [
      "Vật liệu xử lý nước giống như đơn thuốc - bác sĩ không thể kê toa nếu bệnh nhân chưa được nội soi xét nghiệm cơ học cụ thể. Lọc nước trung tâm cũng tương tự.",
      "Nhiều gia chủ thường sai lầm mua các bộ lọc tổng đóng gói sẵn trên thị trường mà không biết rằng chất lượng nước tại mỗi vị trí địa bàn (Quận Tây Hồ khác với Quận Long Biên hay Huyện Hoài Đức) mang các vấn đề lý hóa rất khác nhau.",
      "Những giá trị then chốt từ việc xét nghiệm mẫu nước thô đầu vào của WWCo:",
      "1. Định lượng hàm lượng độ cứng thực tế của Ca2+: Để căn chỉnh lưu lượng nước đi qua cột cation mềm, tính toán chính xác chu kỳ súc hoàn nguyên bằng muối tinh chất, bảo vệ vật liệu bền bỉ.",
      "2. Phát hiện sớm các chỉ số ô nhiễm ẩn chứa sâu sắc: Như nồng độ sắt hòa tan, mangan đen sọc dính, hay lượng amoni vi chất lơ lửng khó ngửi, từ đó bổ sung lõi xử lý chuyên dụng đúng mục đích."
    ]
  },
  {
    "id": "art27",
    "category": "filtration",
    "categoryLabel": "Central filtration",
    "title": "Nước cứng ảnh hưởng gì đến sen vòi, bình nóng và đường ống?",
    "description": "Nước cứng có thể gây đóng cặn trên sen vòi, thiết bị vệ sinh, đường ống và làm giảm hiệu quả trao đổi nhiệt.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "02 Tháng 05, 2026",
    "content": [
      "Nước cứng với nồng độ muối canxi cacbonat cao là hung thủ thầm lặng bào mòn vẻ thanh lịch sang trọng tôn nghiêm của nội thất biệt thự cao cấp.",
      "Lớp cặn canxi hình thành khi nước bốc hơi hoặc gia nhiệt sấy, bám trụ cứng đầu và tạo ra mảng rỉ rát dột nguy hiểm:",
      "1. Phá hủy diện mạo thiết bị vệ sinh tinh xảo mạ chrome: Lớp vôi canxi bám cứng loang lổ sần sùi lên sen vòi mạ, vách kính phòng tắm, bồn cầu bồn sứ rửa tay. Khiến chúng mất đi hoàn toàn vẻ phản bóng lộng lẫy và không thể lau sạch bằng khăn mềm.",
      "2. Làm giảm hiệu năng đun tỏa nhiệt của Heat Pump nóng: Lớp vôi canxi cách nhiệt rất tốt, bọc cứng xung quanh lõi đồng truyền nhiệt sấy, khiến năng lượng gia nhiệt hao tốn gấp đôi để sưởi được lượng nước tương đương.",
      "3. Gây hẹp tịt lòng ống dẫn: Tiết diện đường ống dắt thu nhỏ chậm rãi chặn dòng, làm giảm sụt áp lực sử dụng nước tại các sen tắm massage đầu phun lớn."
    ]
  },
  {
    "id": "art28",
    "category": "filtration",
    "categoryLabel": "Central filtration",
    "title": "Than hoạt tính trong hệ lọc tổng có tác dụng gì?",
    "description": "Than hoạt tính giúp giảm clo dư, mùi và một phần hợp chất hữu cơ trong nước sinh hoạt.",
    "image": "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "28 Tháng 04, 2026",
    "content": [
      "In trong hệ sườn lọc nước trung tâm đa cột, cột lọc chứa vật liệu Than Hoạt Tính (Activated Carbon Core) luôn được coi là chốt chặn xử lý hóa học quan trọng nhất.",
      "Với cấu trúc hàng triệu vi liên kết rỗng tạo diện tích bề mặt tiếp xúc vô song hạt than sấy, vật liệu này mang lại chức năng cực kỳ đắt giá:",
      "1. Hấp thụ triệt để lượng clo dư và chloramine độc hại: Loại bỏ hoàn toàn mùi khử trùng hăng nồng nặc sặc sụa của nước đô thị, giải phóng cảm giác dịu nhẹ thoải mái trong lành khi xả bồn nằm ngủ khí.",
      "2. Lọc khử mùi hôi nấm mốc hữu cơ hòa tan: Loại bỏ triệt để các hợp chất hữu cơ bay hơi VOCs xâm lấn bể mái bể chứa.",
      "WWCo cam kết chọn than gáo dừa hoạt hóa độ tẩm sấy cao cấp nhập khẩu trực tiếp từ Nhật Bản, độ tơi xốp tối ưu bền vững gấp nhiều lần than thông thường dạng vụn mỏng dễ nát rã rớt."
    ]
  },
  {
    "id": "art29",
    "category": "filtration",
    "categoryLabel": "Central filtration",
    "title": "Hệ làm mềm nước có cần thiết cho biệt thự không?",
    "description": "Hệ làm mềm nước phù hợp với công trình có độ cứng cao, nhiều thiết bị vệ sinh cao cấp hoặc hệ nước nóng trung tâm.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "22 Tháng 04, 2026",
    "content": [
      "Lắp đặt hệ lọc làm mềm nước (Water Softener) bằng hạt cation kẽm trao đổi ion thường là khoản đầu tư có giá thành cao nhất trong trạm xử lý lọc tổng ngôi biệt thự.",
      "Để quyết định xem căn villa biệt thự của gia đình có thực sự cần module lọc làm mềm này hay không, gia chủ hãy tham khảo 3 điều kiện kỹ thuật cốt lõi sau:",
      "1. Kết quả kiểm tra xét nghiệm mẫu nước cứng: Nếu nồng độ Ca2+ ghi nhận vượt trị số 100mg/lít, đây là ngưỡng nước cứng gây bám cặn trắng lên vách kính vòi sen Grohe rất rõ nét sau một tháng.",
      "2. Công trình của gia chủ trang bị hệ thống nước nóng trung tâm Heat Pump: Nước nóng thúc đẩy quá trình kết tủa canxi cacbonat nhanh gấp 4 lần nước lạnh bình thường. Lắp hệ sưởi cấp Heat Pump bắt buộc phải kết hợp làm mềm nước để cứu dàn máy nén thoát tắc nghẽn tàn phá.",
      "3. Đáp ứng chất lượng về cảm nhận chăm sóc da lông: Nước mềm giúp xà phòng tạo bọt trơn mịn tự nhiên, giặt quần áo mềm sợi tơi xốp không bị xơ cứng nhăn."
    ]
  },
  {
    "id": "art30",
    "category": "filtration",
    "categoryLabel": "Central filtration",
    "title": "Vì sao hệ lọc nước cần có đường xả rửa đúng kỹ thuật?",
    "description": "Đường xả rửa giúp hệ lọc tự làm sạch vật liệu, duy trì lưu lượng và hạn chế tắc nghẽn trong quá trình vận hành.",
    "image": "https://images.unsplash.com/photo-1585418694458-dc809e120202?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "date": "18 Tháng 04, 2026",
    "content": [
      "Hệ thống lọc nước tổng biệt thự hoạt động giống như một tấm giáp che chở ngăn bùn, không rỉ sét và canxi bám dính bẩn vào nhà. Sau một chu kỳ lọc nhất định, lượng tạp chất bị găm nén lại trong hạt vật liệu lọc là vô cùng khổng lồ.",
      "If không trang bị đường nước xả sút rửa thiết kế chuẩn chỉ kích thước, mớ tạp chất này sẽ bị ứ nghẽn bão hòa và phá lỏng hiệu năng lọc nước.",
      "Một đường xả rửa đúng quy chuẩn kỹ thuật thiết kế bởi WWCo bao gồm các nguyên nhân:",
      "1. Đảm bảo thoát nước tự do nhanh chóng giờ xả rửa lớn: Van tự động sục ngược sút rác cát bẩn cần lưu lượng thoát tự do phi lớn đến 5m³/giờ không nghẽn ứ dột.",
      "2. Hãm áp xả hồi ngược an toàn cho vật liệu: Đường xả cần uốn cong có bẫy hơi thông khí tránh dòng chảy ngắt âm tạo chênh áp làm hạt nhựa cation trôi tuột theo ống xả ra cống bảo vệ lãng phí."
    ]
  },
  {
    "id": "art31",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Sưởi sàn nước nóng nên làm ở những khu vực nào trong biệt thự?",
    "description": "Sưởi sàn phù hợp với phòng khách, phòng ngủ, khu sinh hoạt chung và các không gian nghỉ dưỡng tại miền Bắc.",
    "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "12 Tháng 04, 2026",
    "content": [
      "Hệ sưởi sàn thủy lực Hydronic nước nóng tạo cảm giác ấm ngọt như tia nắng dịu mùa xuân, tỏa đều từ ngón chân đi trần mộc mạc thư thái cực đỉnh.",
      "Tuy nhiên, do chi phí lắp đặt hệ sưởi thủy lực tương đối lớn, việc phân bổ quy hoạch sưởi sàn theo khu vực trong công năng biệt thự mang lại hiệu quả cao cùng kinh phí tối ưu nhất:",
      "1. Phòng khách lớn tầng một và khu vực sinh hoạt chung thông tầng: Đây là bộ mặt tiếp khách trung tâm của toàn gia đình, có diện tích kính mở thoáng lớn tràn hơi lạnh mùa đông nên sưởi sàn nước nóng là tấm rèm sưởi giữ nhiệt tối mưu bậc nhất.",
      "2. Các phòng ngủ chính của gia đình (Master Bedrooms): Đôi bàn chân sờ chạm nền ấm lót gỗ tự nhiên mượt trước khi lên giường ngủ lấp đầy giấc say yên lành, đặc biệt hữu ích chống lạnh buốt xương người cao tuổi và ngăn viêm phổi.",
      "3. Phòng tắm VIP có bồn tắm nằm: Loại bỏ hoàn toàn sự run rẩy buốt lạnh khi bước ra khỏi bồn tắm đá trên nền gạch hoa giá buốt khô sờ tủ."
    ]
  },
  {
    "id": "art32",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Sưởi sàn nước nóng cần phối hợp với kiến trúc từ giai đoạn nào?",
    "description": "Sưởi sàn liên quan đến cao độ nền, lớp hoàn thiện, tuyến ống, manifold và vị trí điều khiển nên cần tính từ sớm.",
    "image": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "08 Tháng 04, 2026",
    "content": [
      "Để trang bị được trạm sưởi nhiệt sàn thủy lực chạy nước ấm dịu cao nhã, việc phối hợp đồng bộ kết cấu thiết kế giữa WWCo, Đội Thiết kế Kiến trúc sư và Kỹ sư MEP thô cần diễn ra ngay khi lập bản vẽ móng dầm đợt thô.",
      "Các mối nối phối kỹ thuật liên kết đan cài bao gồm:",
      "1. Căn lề hạ cốt âm nền sàn bê tông lót thô: Để tránh bị cộm chênh cửa rào dầm, độ cốt sàn thô tại các phòng có sưởi sàn thủy lực buộc phải âm thấp hơn 90mm đến 110mm so với mặt sàn chuẩn không sưởi. Khoảng trống này để lắp đặt hệ phễu xốp bọc bảo ôn cách nhiệt, lưới kẹp ống sưởi PEX đan đều tâm 15-20cm.",
      "2. Lựa chọn lớp phủ vật liệu hoàn thiện mặt sàn sưởi: Gạch đá tự nhiên ceramic truyền nhiệt và chịu giãn nở cốt nền tốt nhất. Nếu gia chủ chọn gỗ tự nhiên, thợ thi công móng cần chọn gỗ biến tính sấy lò hoặc gỗ engineer đạt chuẩn chịu sưởi nóng không cong vênh nứt rạn lớp màng sơn bả."
    ]
  },
  {
    "id": "art33",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Manifold trong hệ sưởi sàn nước nóng có vai trò gì?",
    "description": "Manifold giúp chia tuyến ống sưởi, điều chỉnh lưu lượng và kiểm soát nhiệt độ theo từng khu vực.",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "02 Tháng 04, 2026",
    "content": [
      "Trong bức tranh công nghệ sưởi sàn tuần hoàn thủy lực cao cấp, cụm chia điều phối Manifold (Bộ chia sưởi nước nóng) đóng vai trò trung khu thần kinh kiểm soát phân phối dòng chảy ấm áp.",
      "Nhiệm vụ của cụm chia Manifold là chia đều nguồn nước nóng dẫn từ phòng máy sưởi ấm chính đến từng vòng ống sưởi PEX lắp ẩn sâu sắc dưới sàn hoa sảnh:",
      "1. Cân bằng lưu lượng dòng thủy lực tự động: Nhờ các cột lưu kế vặn ren tinh tế, kỹ thuật viên tính toán hiệu áp tránh vòng ống ngắn nhận nhiều nước nóng còn vòng ống dài ở xa bị hụt nhiệt.",
      "2. Điều phối độc lập từng phòng zone sưởi bằng động cơ chấp hành (Actuator): Kết nối ghép bộ điều khiển phòng (Thermostat). Khi phòng ngủ Master đạt đủ 24°C, động cơ kẹp van từ ngắt nhịp hồi vòng ống phòng đó để tiết kiệm sưởi lãng phí.",
      "Mọi cụm chia sưởi WWCo thi công đều bọc bằng hợp kim đồng hoặc inox không rỉ cao cấp nhập khẩu của Ý, lắp đặt gọn gàng thanh lịch âm kín sau tủ âm tiện dụng tinh xảo."
    ]
  },
  {
    "id": "art34",
    "category": "heating",
    "categoryLabel": "Floor heating",
    "title": "Sưởi sàn nước nóng có làm khô không khí không?",
    "description": "Sưởi sàn tạo cảm giác ấm đều từ dưới lên, không thổi gió trực tiếp nên ít gây cảm giác khô như một số hình thức sưởi bằng gió.",
    "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "28 Tháng 03, 2026",
    "content": [
      "Mối lo ngại kinh điển bậc nhất của các gia chủ xứ lạnh khi sưởi ấm mùa đông là cảm giác rát buốt hốc mũi, ngột ngạt ngực khát nước và thô rát da dẻ do dùng điều hòa ấm sấy liên tiếp.",
      "Tuy nhiên, hệ thống sưởi sàn thủy lực dựa trên bức xạ nhiệt tự nhiên giải quyết triệt thế nỗi ám ảnh sụt khô không khí nhờ tính chất vật lý ưu ái khác lạ:",
      "1. Không khuấy động dòng gió cuồng phong nhân tạo: Điều hòa sưởi thổi luồng khí cưỡng bức cưỡng chế cuốn bụi bẩn bay vòng quanh thúc đẩy thất tán nước hơi da dẻ. Sưởi sàn tỏa nhiệt tĩnh bức xạ tự đáy nền, dòng chảy đối lưu vi vút cực êm.",
      "2. Duy trì độ ẩm tương đối của khí thở tự do an lành: Nhờ nền giữ ấm bức xạ nhẹ dịu ở nhiệt độ vừa tầm ấm chân (24°C-27°C), phân tử nước bốc hơi rải rác tự nhiên không bị nung nóng khô nhanh rợn.",
      "Cảm nhận sưởi thủy lực luôn đem lại hơi thở ấm mềm trong trẻo nhất bảo vệ giấc lành ngọc ngà của trẻ nhỏ khỏi mối lo hen suyễn hô hấp buốt giá mùa đông dạt thô hoảng."
    ]
  },
  {
    "id": "art35",
    "category": "experience",
    "categoryLabel": "Site experience",
    "title": "Vì sao đội MEP cần tham gia sớm khi làm hệ nước trung tâm?",
    "description": "Đội MEP tham gia sớm giúp kiểm soát tuyến ống, điện cấp nguồn, thoát nước kỹ thuật và tránh xung đột khi thi công.",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "19 Tháng 03, 2026",
    "content": [
      "Cơ điện nước biệt thự nếu thi công độc lập không ăn khớp thống nhất phối hợp bản vẽ tuyến lót chờ móng Gen thô sẽ hóa thành cơn đau đầu kéo dài triền miên cho kiến trúc thi công biệt thự.",
      "Phối hợp MEP sớm từ vòng lập bản vẽ sơ tuyển đem lại hiệu mưu rõ ràng giúp loại bỏ xung đột thực tế công trường:",
      "1. Tránh khoan cắt đục uốn phá bê tông nén dầm kết cấu: Điểm gen thu chứa sưởi ống tuần hoàn hồi bọc bảo ôn dải dẹt lớn bắt buộc chừa sẵn lỗ gen dầm sàn, nếu không chừa phải khoan đứt thép dầm chịu lực cực kỳ tai hại.",
      "2. Đồng bộ đấu đấu nạp nguồn công suất động lực điện: Sưởi sàn hay Heat Pump dùng bơm nén lớn cần tủ điện dẹp động cơ bảo vệ an toàn riêng, tránh xung đột quá tải làm rớt nhảy sụt áp át tổng tòa nhà biệt thự.",
      "WWCo đồng hành bàn trực tiếp điều phối tiến trình cơ địa MEP thông qua mô hình kỹ thuật chi tiết rõ rệt."
    ]
  },
  {
    "id": "art36",
    "category": "hotwater",
    "categoryLabel": "Central hot water",
    "title": "Checklist trước khi lắp đặt hệ nước trung tâm cho biệt thự",
    "description": "Trước khi lắp đặt, cần kiểm tra mặt bằng, điện, nước, thoát sàn, tuyến ống chờ, không gian thao tác và tình trạng thiết bị.",
    "image": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "date": "12 Tháng 03, 2026",
    "content": [
      "Một tiến trình lắp ráp thi công hệ máy sưởi lọc tuần hoàn nước ấm trung tâm WWCo chuẩn chỉ súc gọn gàng trên công trường biệt thự không tự dưng diễn ra êm đẹp trơn tru.",
      "Đó là thành quả của bộ công thức Checklist quản lý tiến trình khảo sát nghiệm thu chi tiết dưới đây trước ngày thả dỡ lắp máy:",
      "1. Đã sẵn sàng cốt móng giếng đổ bệ bê tông phẳng cao cách ly sàn xối: Đủ thiết diện định vị nâng giữ bồn dầm dung tích bảo ôn 500L chứa tải.",
      "2. Có sẵn hố thoát thu nước hở phi lớn cạnh trạm lọc: Gom dòng xối rửa tự động định tuần xả hạt cation nhanh chóng, không gây trào ngược bẩn tràn.",
      "3. Tuyến ống cấp hồi của các tầng dắt chờ tại trạm máy phải kiểm áp an toàn bọc cách nhiệt đạt chuẩn, đảm bảo bọc nén áp hơn 6-8 bar liên tục một tuần thử rò rỉ rạn vỡ móng nứt."
    ]
  }
];

