function calc(_dun, _kook, gan_chi) {
  //var d = new Date(); //��U
  //
  var tcol0 = [gan_chi[0]];
  var dcol0 = [gan_chi[1]];
  // �p���e����
  // �p�����P
  var dun_type = _dun; // 0�����P, 1�����P, ��l�����~
  var using_kook = _kook;  //����
  /** ���p�ɦ��� **/
  //�@�ɦ���
  var chun_sau = "�l���G�f���x�ȥ��Ө�����".indexOf(dcol0[0]) - "�ҤA���B���v�����Ь�".indexOf(tcol0[0]);
  if(chun_sau < 0) chun_sau += 12;
  // �ئa�L
  var dei_pan = ""; // �ئa�L
  if(dun_type == 1) { // ���P
    //var dei_pan = " ���v�����ЬѤB���A���v�����ЬѤB���A".substr(9-using_kook+1,9); // �a�L
    var dei_pan = "���v�����ЬѤB���A���v�����ЬѤB���A".substr(9-using_kook+1,9); // �a�L
  } else { // ���P
    //var dei_pan = " ���A���B�ѤШ����v���A���B�ѤШ����v".substr(9-using_kook+1,9);
    var dei_pan = "���A���B�ѤШ����v���A���B�ѤШ����v".substr(9-using_kook+1,9);
  }//console.log(dei_pan);
  // ��Ȳ�
  var chun_sau = " �l���ӤȨ��G".indexOf("�l�G���ȥӦ�".charAt(parseInt(chun_sau/2)));
  var jik_fu_idx = 0;
  var jik_fu_star = 0;
  var _tmp = tcol0[0];
  if(dun_type == 1) { // ���P
    var jik_fu_idx = using_kook + chun_sau - 1;
    while(jik_fu_idx > 9) jik_fu_idx -= 9;
    while(jik_fu_idx < 1) jik_fu_idx += 9;
    if(_tmp == '��') _tmp = " ���v�����Ь�".charAt(chun_sau);
    jik_fu_star = " ���v�����ЬѤB���A".indexOf(_tmp) + using_kook - 1;
    while(jik_fu_star > 9) jik_fu_star -= 9;
  } else {
    var jik_fu_idx = 1 + using_kook - chun_sau;
    while(jik_fu_idx > 9) jik_fu_idx -= 9;
    while(jik_fu_idx < 1) jik_fu_idx += 9;
    if(_tmp == '��') _tmp = " ���v�����Ь�".charAt(chun_sau);
    jik_fu_star = 1 + using_kook - " ���v�����ЬѤB���A".indexOf(_tmp);
    while(jik_fu_star < 1) jik_fu_star += 9;
  }
  //if(jik_fu_star == 5) jik_fu_star = 2; // �V�P�H�G�c
  if(jik_fu_star == 5) jik_fu_star = 2; // �V�P�H�G�c
  // �p�Ȩ�, ���������P
  var jik_fu_mun = 0;
  if(dun_type == 1) {
    jik_fu_mun = jik_fu_idx + " �ҤA���B���v�����Ь�".indexOf(tcol0[0]) - 1;
    while(jik_fu_mun > 9) jik_fu_mun -= 9;
  } else {
    jik_fu_mun = jik_fu_idx - " �ҤA���B���v�����Ь�".indexOf(tcol0[0]) + 1;
    while(jik_fu_mun < 1) jik_fu_mun += 9;
  }
  //console.log("jik_fu_mun:",jik_fu_mun);
  if(jik_fu_mun == 5) jik_fu_mun = 2; // ���c�H�[�G�c
  // �p��P�L
  var houses_star_target = "18349276".indexOf(jik_fu_star);
  var houses_star_idx = "183492761834927618349276".substr(8-houses_star_target+1, 8);
  //console.log("houses_star_idx1:",houses_star_idx);
  var houses_star_idx  = [1,8,3,4,9,2,7,6]; var _jfi = (jik_fu_idx == 5 ? 2 : jik_fu_idx);
  while(houses_star_idx[houses_star_target] != _jfi) {
    houses_star_idx.unshift(houses_star_idx.pop());
  }
  var star_pan = new Array; //�P�L
  for(var i = 1; i < 10; i++)
  {
    if(i == 5) {
      star_pan.push(5);
    } else {
      star_pan.push(houses_star_idx["18349276".indexOf(i)]);
    }
  }
  var houses_star = new Array;
  for(var i = 0; i < 9; i++) {
    houses_star.push("�A���~�Ļ��V�߬W���^".charAt(star_pan[i]));
  }
  // �p��ѽL
  var tin_pan = new Array;  // �ѽL
  if( dun_type  == 1) { // ���P
    for(var i = 0; i < 9;i++) 
    {
      var _tin = star_pan[i] - using_kook + 1;
      while(_tin < 1) _tin += 9;
      tin_pan.push(" ���v�����ЬѤB���A".charAt(_tin));
    }
  } else {
    for(var i = 0; i < 9; i++) {
      var _tin = using_kook - star_pan[i] + 1;
      while(_tin < 1) _tin += 9;
      tin_pan.push(" ���v�����ЬѤB���A".charAt(_tin));
    }
  }
  // �p��K��
  var houses_door_target = "18349276".indexOf(jik_fu_mun);
  var houses_door_idx  = [1,8,3,4,9,2,7,6];
  //console.log("houses_door_target: ",houses_door_target);
  //return;
  var _jfi = (jik_fu_idx == 5 ? 2 : jik_fu_idx);
  while(houses_door_idx[houses_door_target] != _jfi) {
    houses_door_idx.unshift(houses_door_idx.pop());
  }
  var door_pan = new Array; //���L(�K��)
  for(var i = 1; i < 10; i++)
  {
    if(i == 5) {
      door_pan.push(5);
    } else {
      door_pan.push(houses_door_idx["18349276".indexOf(i)]);
    }
  }
  var house_door = new Array;
  for(var i = 0; i < 9; i++) {
    house_door.push("�A�𦺶˧��@�}��ʹ�".charAt(door_pan[i]));
  }
  // �p��K��
  var houses_god;
  if(dun_type == 1) { // ���P-����
    var houses_god_target = "18349276".indexOf(jik_fu_star);
    houses_god = ['��','�D','��','�X','��','��','�a','��'];
    while(houses_god[houses_god_target] != '��') {
      houses_god.unshift(houses_god.pop());
    }
  } else {
    var houses_god_target = "18349276".indexOf(jik_fu_star);
    houses_god = ['��','��','�a','��','��','�X','��','�D'];
    while(houses_god[houses_god_target] != '��') {
      houses_god.unshift(houses_god.pop());
    }
  }
  var god_pan = new Array; //���L(�K��)
  for(var i = 1; i < 10; i++)
  {
    if(i == 5) {
      god_pan.push('�@');
    } else {
      god_pan.push(houses_god["18349276".indexOf(i)]);
    }
  }
  /**
  // ��X�ѽL
  document.write("�ѽL�G",tin_pan.join(""),"\r\n");
  // ��X�a�L
  document.write("�a�L�G",dei_pan,"\r\n");
  // ��X�P�L
  document.write("�P�L�G",houses_star.join(""),"\r\n");
  // ��X���L
  document.write("���L�G",house_door.join(""),"\r\n");
  // ��X�K��
  document.write("���L�G",god_pan.join(""),"\r\n");
  // ����
  **/
  //console.log({'info':{'�z��':gan_chi,'�P':_dun?'��':'��','��':_kook },'�P':tin_star, '��':tin_pan, '�a':dei_pan, '��':door_pan, '��':god_pan});
  return {'info':{'�z��':gan_chi,'�P':_dun?'��':'��','��':_kook,'��':" ���~�R���V�߬W���^".charAt(jik_fu_idx) },'�P':houses_star, '��':tin_pan, '�a':dei_pan, '��':house_door, '��':god_pan};
}