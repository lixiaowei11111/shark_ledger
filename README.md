
shark_ledger:H5 applications that can be used completely offline

Technology stack: 
+ build tool: vite  
+ state manager: zustand、useReducer
+ router: react-router
+ storage: indexeddb、File API
+ framework: react
+ router: react-router 
+ ui lib: MUI 
+ style: tailwindcss、emotion
+ visualization: echarts 
+ type checker: typescript 
+ deploy: vercel/github page
+ other: [pwa](https://vite-pwa-org.netlify.app/guide/#scaffolding-your-first-vite-pwa-project)

- [] 使用`pwa`提供只需要安装一次就可以完全离线使用功能
- [] 提供本地账号密码登录,方便一台设备上的多用户数据隔离,暂不提供加密数据功能
- [] 使用`indexeddb(idb)`存储数据,同时通过`File API`提供保存数据文件到本地文件夹功能
- [] 提供`excel`或者`json`导入功能(以日期为维度日期,金额,备注,支出,收入)
- [] 提供相关可视化分析功能
- [] 使用`vercel`部署,后续支持一键部署
- [] 支持白天黑夜主题切换
- [] 优先考虑中文,后续提供多语言本地化支持

TODO:
- [] [颜色主题,定义一套主要颜色](https://mui.com/material-ui/customization/color/)