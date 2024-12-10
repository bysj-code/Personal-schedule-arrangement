package com.entity.view;

import com.entity.YongcanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 用餐
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-05-07 10:34:43
 */
@TableName("yongcan")
public class YongcanView  extends YongcanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public YongcanView(){
	}
 
 	public YongcanView(YongcanEntity yongcanEntity){
 	try {
			BeanUtils.copyProperties(this, yongcanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}