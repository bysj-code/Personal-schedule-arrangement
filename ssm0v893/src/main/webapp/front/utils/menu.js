const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","删除"],"menu":"重要日","menuJump":"列表","tableName":"zhongyaori"}],"menu":"重要日管理"},{"child":[{"buttons":["查看","删除"],"menu":"工作日程","menuJump":"列表","tableName":"gongzuoricheng"}],"menu":"工作日程管理"},{"child":[{"buttons":["查看","删除"],"menu":"会面","menuJump":"列表","tableName":"huimian"}],"menu":"会面管理"},{"child":[{"buttons":["查看","删除"],"menu":"用餐","menuJump":"列表","tableName":"yongcan"}],"menu":"用餐管理"},{"child":[{"buttons":["查看","删除"],"menu":"日程","menuJump":"列表","tableName":"richeng"}],"menu":"日程管理"},{"child":[{"buttons":["查看","删除"],"menu":"重要日转发","menuJump":"列表","tableName":"zhongyaorizhuanfa"}],"menu":"重要日转发管理"},{"child":[{"buttons":["查看","删除"],"menu":"工作日程转发","menuJump":"列表","tableName":"gongzuorichengzhuanfa"}],"menu":"工作日程转发管理"},{"child":[{"buttons":["查看","删除"],"menu":"日程转发","menuJump":"列表","tableName":"richengzhuanfa"}],"menu":"日程转发管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"重要日列表","menuJump":"列表","tableName":"zhongyaori"}],"menu":"重要日模块"},{"child":[{"buttons":["查看"],"menu":"工作日程列表","menuJump":"列表","tableName":"gongzuoricheng"}],"menu":"工作日程模块"},{"child":[{"buttons":["查看"],"menu":"日程列表","menuJump":"列表","tableName":"richeng"}],"menu":"日程模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","新增","修改","删除","转发"],"menu":"重要日","menuJump":"列表","tableName":"zhongyaori"}],"menu":"重要日管理"},{"child":[{"buttons":["查看","会面","新增","修改","删除","用餐","转发"],"menu":"工作日程","menuJump":"列表","tableName":"gongzuoricheng"}],"menu":"工作日程管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"会面","menuJump":"列表","tableName":"huimian"}],"menu":"会面管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"用餐","menuJump":"列表","tableName":"yongcan"}],"menu":"用餐管理"},{"child":[{"buttons":["查看","修改","删除","新增","转发"],"menu":"日程","menuJump":"列表","tableName":"richeng"}],"menu":"日程管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"重要日列表","menuJump":"列表","tableName":"zhongyaori"}],"menu":"重要日模块"},{"child":[{"buttons":["查看"],"menu":"工作日程列表","menuJump":"列表","tableName":"gongzuoricheng"}],"menu":"工作日程模块"},{"child":[{"buttons":["查看"],"menu":"日程列表","menuJump":"列表","tableName":"richeng"}],"menu":"日程模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
