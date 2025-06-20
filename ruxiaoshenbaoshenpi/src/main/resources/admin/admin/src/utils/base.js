const base = {
    get() {
        return {
            url : "http://localhost:8080/ruxiaoshenbaoshenpi/",
            name: "ruxiaoshenbaoshenpi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ruxiaoshenbaoshenpi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "入校申报审批系统"
        } 
    }
}
export default base
