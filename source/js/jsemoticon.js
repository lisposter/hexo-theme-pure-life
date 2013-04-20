(function () {
	var _cfg = {
		//the id of the html tag which contain your text.
		domID: 'content',

		//the location of your smilies images.
		path: '/smilies/',

		//all of the smilies' definition.
		//smilies: the tag you will used in your text; filename: the smilies's filename.
		emotions: [
			{smilies: '[ali啊啊啊]', filename: 'ali_aaa.gif'},
			{smilies: '[ali闭嘴]', filename: 'ali_bizui.gif'},
			{smilies: '[ali不公平]', filename: 'ali_bugongpin.gif'},
			{smilies: '[ali不耐烦]', filename: 'ali_bunaifan.gif'},
			{smilies: '[ali嘲弄]', filename: 'ali_chaonong.gif'},
			{smilies: '[ali大汗]', filename: 'ali_dahan.gif'},
			{smilies: '[ali大惊]', filename: 'ali_dajing.gif'},
			{smilies: '[ali顶]', filename: 'ali_ding.gif'},
			{smilies: '[ali感动]', filename: 'ali_gandong.gif'},
			{smilies: '[ali寒]', filename: 'ali_han.gif'},
			{smilies: '[ali好强]', filename: 'ali_haoqiang.gif'},
			{smilies: '[ali贱扭扭]', filename: 'ali_jianniuniu.gif'},
			{smilies: '[ali囧]', filename: 'ali_jiong.gif'},
			{smilies: '[ali开心]', filename: 'ali_kaixin.gif'},
			{smilies: '[ali抠鼻孔]', filename: 'ali_koubikong.gif'},
			{smilies: '[ali赖皮]', filename: 'ali_laipi.gif'},
			{smilies: '[ali捏脸]', filename: 'ali_nielian.gif'},
			{smilies: '[ali爬过]', filename: 'ali_paguo.gif'},
			{smilies: '[ali耍帅]', filename: 'ali_shuashuai.gif'},
			{smilies: '[ali送花]', filename: 'ali_songhua.gif'},
			{smilies: '[ali送礼]', filename: 'ali_songli.gif'},
			{smilies: '[ali晚安]', filename: 'ali_wanan.gif'},
			{smilies: '[ali旋转]', filename: 'ali_xuanzhuan.gif'},
			{smilies: '[ali嘘嘘]', filename: 'ali_xuxu.gif'},
			{smilies: '[ali疑问]', filename: 'ali_yiwen.gif'},
			{smilies: '[ali郁闷]', filename: 'ali_yumen.gif'},
			{smilies: '[ali抓狂]', filename: 'ali_zhuakuang.gif'},
			{smilies: '[ali装可爱]', filename: 'ali_zhuangkeai.gif'},
			{smilies: '[ali转圈哭]', filename: 'ali_zhuanquanku.gif'},
			{smilies: '[bed奔跑]', filename: 'bed_benpao.gif'},
			{smilies: '[bed蹬腿]', filename: 'bed_dengtui.gif'},
			{smilies: '[bed飞吻]', filename: 'bed_feiwen.gif'},
			{smilies: '[bed好饱]', filename: 'bed_haobao.gif'},
			{smilies: '[bed嘿哈]', filename: 'bed_heiha.gif'},
			{smilies: '[bed举哑铃]', filename: 'bed_juyaling.gif'},
			{smilies: '[bed啦啦啦]', filename: 'bed_lalala.gif'},
			{smilies: '[bed练腰]', filename: 'bed_lianyao.gif'},
			{smilies: '[bed凌乱]', filename: 'bed_lingluan.gif'},
			{smilies: '[bed拍脸]', filename: 'bed_pailian.gif'},
			{smilies: '[bed拍手]', filename: 'bed_paishou.gif'},
			{smilies: '[bed跑]', filename: 'bed_pao.gif'},
			{smilies: '[bed皮]', filename: 'bed_pi.gif'},
			{smilies: '[bed飘忽]', filename: 'bed_piaohu.gif'},
			{smilies: '[bed揉眼]', filename: 'bed_rouyan.gif'},
			{smilies: '[bed撒娇]', filename: 'bed_sajiao.gif'},
			{smilies: '[bed踏步]', filename: 'bed_tabu.gif'},
			{smilies: '[bed弹跳]', filename: 'bed_tantiao.gif'},
			{smilies: '[bed跳]', filename: 'bed_tiao.gif'},
			{smilies: '[bed兴奋]', filename: 'bed_xingfen.gif'},
			{smilies: '[bed仰卧起坐]', filename: 'bed_yangwoqizuo.gif'},
			{smilies: '[bed转圈]', filename: 'bed_zhuanquan.gif'},
			{smilies: ':mrgreen:', filename: 'icon_mrgreen.gif'},
			{smilies: ':neutral:', filename: 'icon_neutral.gif'},
			{smilies: ':twisted:', filename: 'icon_twisted.gif'},
			{smilies: ':arrow:', filename: 'icon_arrow.gif'},
			{smilies: ':shock:', filename: 'icon_eek.gif'},
			{smilies: ':smile:', filename: 'icon_smile.gif'},
			{smilies: ':???:', filename: 'icon_confused.gif'},
			{smilies: ':cool:', filename: 'icon_cool.gif'},
			{smilies: ':evil:', filename: 'icon_evil.gif'},
			{smilies: ':grin:', filename: 'icon_biggrin.gif'},
			{smilies: ':idea:', filename: 'icon_idea.gif'},
			{smilies: ':oops:', filename: 'icon_redface.gif'},
			{smilies: ':razz:', filename: 'icon_razz.gif'},
			{smilies: ':roll:', filename: 'icon_rolleyes.gif'},
			{smilies: ':wink:', filename: 'icon_wink.gif'},
			{smilies: ':cry:', filename: 'icon_cry.gif'},
			{smilies: ':eek:', filename: 'icon_surprised.gif'},
			{smilies: ':lol:', filename: 'icon_lol.gif'},
			{smilies: ':mad:', filename: 'icon_mad.gif'},
			{smilies: ':sad:', filename: 'icon_sad.gif'},
			{smilies: '8-)', filename: 'icon_cool.gif'},
			{smilies: '8-O', filename: 'icon_eek.gif'},
			{smilies: ':-(', filename: 'icon_sad.gif'},
			{smilies: ':-)', filename: 'icon_smile.gif'},
			{smilies: ':-?', filename: 'icon_confused.gif'},
			{smilies: ':-D', filename: 'icon_biggrin.gif'},
			{smilies: ':-P', filename: 'icon_razz.gif'},
			{smilies: ':-o', filename: 'icon_surprised.gif'},
			{smilies: ':-x', filename: 'icon_mad.gif'},
			{smilies: ':-|', filename: 'icon_neutral.gif'},
			{smilies: ';-)', filename: 'icon_wink.gif'},
			{smilies: '8)', filename: 'icon_cool.gif'},
			{smilies: '8O', filename: 'icon_eek.gif'},
			{smilies: ':(', filename: 'icon_sad.gif'},
			{smilies: ':)', filename: 'icon_smile.gif'},
			{smilies: ':?', filename: 'icon_confused.gif'},
			{smilies: ':D', filename: 'icon_biggrin.gif'},
			{smilies: ':P', filename: 'icon_razz.gif'},
			{smilies: ':o', filename: 'icon_surprised.gif'},
			{smilies: ':x', filename: 'icon_mad.gif'},
			{smilies: ':|', filename: 'icon_neutral.gif'},
			{smilies: ';)', filename: 'icon_wink.gif'},
			{smilies: ':!:', filename: 'icon_exclaim.gif'},
			{smilies: ':?:', filename: 'icon_question.gif'}
		]
	}



	function replacer(em, index) {
		var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;
		var pattern = em.smilies.replace(metachars, "\\$&");
		var targetNode = document.getElementById(_cfg.domID);
		var origString = targetNode.innerHTML;
		
		var modString = origString.replace(new RegExp(pattern, 'g'), '<img src="' + _cfg.path + em.filename + '" />');
		targetNode.innerHTML = modString;
	}
	
	var emLength = _cfg.emotions.length;
	for (var i = emLength - 1; i >= 0; i--) {
		replacer(_cfg.emotions[i], i)
	};
})()