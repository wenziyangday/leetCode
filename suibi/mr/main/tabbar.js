module.exports=[
    {
        "path": "pages/index/index",
        "style": {
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false,
                "scrollIndicator": "none"
            }
        }
    },
    {
        "path": "pages/signIn/daiban/toDoList",
        "style": {
            // "navigationBarTitleText": "待办已办任务列表",
            // "navigationBarBackgroundColor": "#FFFFFF"
            "navigationStyle": "custom" // 隐藏系统导航栏
        }
    },
    {
        "path": "pages/query/query",
        "style": {
            "navigationBarTitleText": "查询统计",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/user/my-user/user",
        "style": {
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    {
        "path": "pages/workBench/workBench",
        "style": {
            "navigationStyle": "custom", // 隐藏系统导航栏
            "app-plus": {
                "scrollIndicator": "none"//隐藏该页面滚动条
            }
        }
    },
]