<template>
  <#assign query="">
  <#if params??&&(params?size>0)>
  <#assign query="?">
  <#assign  keys=params?keys/>
  <#list keys as key>
  <#if (key_index==0)>
  <#assign query=query + key +"=" + params[key] >
  <#else>
  <#assign query=query +"&" +key +"=" + params[key] >
</#if>
</#list>
</#if>
<rx-layout :buttonHidden="buttonHidden" style="padding: 10px" class="list-layout-box ">
  <template #middle>
    <rx-fit>
      <template #middle>
        <rx-fit v-model="fitSearch" :searchBox="isheader?'head':'middle'" :mousedownShow="false">
          <template #head>
            <div class="list-toolbar" :class="{'list-toolbar-empty':topButtonColumns.length === 0}">
              <!--button-->
              <rx-buttons :btns="restButtons" :btnSize="12"
                          :custom="true" :btnRight="btnRight" :size="8"  :hasAllRight="hasAllRight"
              ></rx-buttons>
              <!--button-->
              <span class="search-btn-box">
            <span v-if="formBoList.dataStyle=='tree'">
              <a-checkbox v-model:checked="allowCascade">{{i18List('cascadeSelect','级联选择')}}</a-checkbox>
            </span>
            <rx-list-layout
                :list-layout="listLayout"
                :list-layout-json="listLayoutJson"
                @listLayoutChange="listLayoutChange"
            ></rx-list-layout>
            <span v-if="groupViewJson.length>0">
              <rx-list-group
                  :group-view="groupView"
                  :group-view-select="groupViewSelect"
                  :group-view-json="groupViewJson"
                  :group-view-select-options="groupViewSelectOptions"
                  @groupViewChange="groupViewChange"
                  @groupViewSelectChange="groupViewSelectChange"
              ></rx-list-group>
            </span>

                    <a-button  shape="circle" v-if="!isheader && formBoList.isShowSearch=='YES'" class="circle-btn" @click="searchShow" @mousedown.stop ><SearchOutlined /></a-button>
              <rx-buttons :btns="fixedButtons" :btnSize="12"
                          :custom="true" :btnRight="btnRight" :size="8"  :hasAllRight="hasAllRight"
                          :is-only-icon="true" :is-circle="true" :defaultDropdown="defaultDropdown"
              ></rx-buttons>
              <!--视图管理-->
              <a-button  shape="circle" v-if="formBoList.isShowView=='YES'"  class="circle-btn" @click="openViewVisiBle">
                  <iconShow :icon="viewSetting"/>
              </a-button>
              <!--字段显隐-->
              <a-button shape="circle" v-if="formBoList.isFieldShow=='YES' && listLayout=='table'" class="circle-btn" @click="openFieldVisiBle">
                <SettingOutlined />
              </a-button>
          </span>
            </div>
          </template>
              <template #search>
                <!--search-->
                    <div>
                    <div class="opt-new-pages-search-BNM">
                	<div class="condition-onpsb">
                    	<div class="rx-dropdown-span">
                          <span class="listView">{{i18List('queryView','查询视图')}}</span>
                          <a-dropdown v-model:value="visible" :getPopupContainer="p=>p.parentNode">
                            <span class="rx-ant-dropdown-text">
                              <span class="ant-dropdown-link">{{queryStrategy}}</span>
                              <my-icon :type="'iconicon-test40'"></my-icon>
                            </span>
                            <template #overlay>
                              <a-menu @click="handSearchCommonClick">
                              <template v-if="searchCommonList.length == 0">
                                <a-menu-item class="rx-dropdown-titile-disabled" :disabled="true">{{i18List('sysView','系统视图')}}</a-menu-item>
                                <a-menu-item key="all" :class="{'rx-dropdown-active':activeAll}">{{$ti18('rxList.all','全部')}}</a-menu-item>
                              </template>
                              <template v-if="searchCommonList.length > 0">
                                <a-menu-item class="rx-dropdown-titile-disabled" :disabled="true">{{i18List('sysView','系统视图')}}</a-menu-item>
                                <a-menu-item key="all" :class="{'rx-dropdown-active':activeAll}">{{$ti18('rxList.all','全部')}}</a-menu-item>
                                <a-menu-item :key="item.key" v-for="item of searchCommonList" :class="{'rx-dropdown-item-common':true,'rx-dropdown-active':item.active}">
                                  <div class="rx-itme">
                                    <span class="rx-text">{{ item.label }}</span>
                                  </div>
                                </a-menu-item>
                              </template>
                              <template v-if="searchUserList.length > 0">
                                <a-menu-item class="rx-dropdown-titile-disabled" :disabled="true">{{i18List('personalView','个人视图')}}</a-menu-item>
                                <a-menu-item :key="item.key" v-for="item of searchUserList" :class="{'rx-dropdown-item-user':true,'rx-dropdown-active':item.active}">
                                  <div class="rx-itme">
                                    <span class="rx-text">{{ item.label }}</span>
                                  </div>
                                </a-menu-item>
                              </template>
                            </a-menu>
                            </template>
                          </a-dropdown>
                </div>
                <div class="item" v-for="i in conditionTags" :key="i.label" v-if="!advanced">
                            <div class="content">{{i.label}}：{{i.value}}</div>
                            <span @click="handleRemove(i)">x</span>
                        </div>
                    </div>
                    <a @click="toggleAdvanced">
                    {{ advanced ? $ti18('rxList.putAwayBtn','收起') : $ti18('rxList.openBtn','展开') }}过滤
                          	<UpOutlined v-if="advanced"/>
                          	<DownOutlined v-else />
                    </a>
                </div>
                    	<a-form ref="formBNM" v-show="advanced" :labelCol="{span: 8}" :wrapperCol="{span: 16}" class="x-list-a-form new-pages-search-BNM" :layout="islayout?'vertical':'horizontal'">
                              <div class="x-list-search-box">
                <div class="x-list-search-item">
                    <a-form-item :label="i18NameParse('isrkoql063340','姓名')">
                            <a-input
                                     style="width: 100%"
                                     @pressEnter="searchAll(close)"
                                     v-model:value="urlConfig.queryParam['Q_PERSON_NAME_S_LK']"/>
                    </a-form-item>
                </div>
                <div class="x-list-search-item">
                    <a-form-item :label="i18NameParse('qvyjsdk074042','工号')">
                            <a-input
                                     style="width: 100%"
                                     @pressEnter="searchAll(close)"
                                     v-model:value="urlConfig.queryParam['Q_EMPNUMBER_S_LK']"/>
                    </a-form-item>
                </div>
                <div class="x-list-search-item">
                    <a-form-item :label="i18NameParse('qmziqds328499','所属部门')">
                            <a-input
                                     style="width: 100%"
                                     @pressEnter="searchAll(close)"
                                     v-model:value="urlConfig.queryParam['Q_DEPARTMENT_NAME_S_LK']"/>
                    </a-form-item>
                </div>
                <div class="x-list-search-item">
                    <a-form-item :label="i18NameParse('yrjhyvp328739','岗位')">
                            <a-input
                                     style="width: 100%"
                                     @pressEnter="searchAll(close)"
                                     v-model:value="urlConfig.queryParam['Q_POSITION_NAME_S_LK']"/>
                    </a-form-item>
                </div>
                                <template v-if="advanced">
                <div class="x-list-search-item">
                    <a-form-item :label="i18NameParse('nrmxpgi328989','状态')">
                            <rx-select :isParent='!isheader' ref="Q_INST_STATUS__S_MLK" v-model="urlConfig.queryParam['Q_INST_STATUS__S_MLK']"
                                       :multiValue="true"  :labelInValue="false" :multiSelect="true"
                                    url="/api-system/system/core/sysDic/treeByKey?key=lczt" value-field="value" text-field="name"
                                    />
                    </a-form-item>
                </div>
                <div class="x-list-search-item">
                    <a-form-item :label="i18NameParse('wmvbtst936093','入职日期')">

                            <a-range-picker  :locale="locale" :inputReadOnly="true"
                                             ref="queryField_ENTERDATE"  v-model:value="params['queryField_ENTERDATE']"  format="YYYY-MM-DD HH:mm:ss"  @change="searchRangeDateChange($event,'YYYY-MM-DD HH:mm:ss',{tablePre:'',queryField:'ENTERDATE',autoFilter:'YES'})" />
                    </a-form-item>
                </div>
                                </template>
                                    <div class="x-list-search-item x-list-search-submit" v-if="isheader">
                            <span class="x-list-search-submit-buttons">
                                <a-button type="primary" @click="searchAll"><SearchOutlined />{{$ti18('rxList.searchBtn','查询')}}</a-button>
                                <a-button style="margin-left: 4px" @click="resetSearch" >{{$ti18('rxList.resetBtn','重置')}}</a-button>
                                  <a @click="toggleAdvanced" v-if="false" style="margin-left: 8px">
                                    {{ advanced ? $ti18('rxList.putAwayBtn','收起') : $ti18('rxList.openBtn','展开') }}
                                    <UpOutlined v-if="advanced"/>
                                    <DownOutlined v-else />
                                    </a>
                            </span>
                                    </div>
                              </div>
                            </a-form>
                    </div>
                <!--search-->
              </template>
          <template #middle>
            <div style="height:100%;display: flex;overflow: auto;">
              <div style='flex:1;display: flex;flex-direction: column;overflow: auto;'>
                <!---开启搜索过滤1--begin-->
                <!---开启搜索过滤1--end-->
                <!--table-->
                <div style="flex: 1;overflow: auto;">
                  <rx-grid ref="table"
                           :border="formdata?.tableStyleAlia"
                           :lineHeight="formdata?.lineHeightAlia"
                           :row-class-name="listTableRowClassName"
                           :cell-class-name="listTableCellClassName"
                           v-if="listLayout=='table'"
                           :hasSeq="false"
                           :scrollX="{}"
                           v-model:checkRowKeys="selectedRows"
                           :columns="columns"
                           :height="formBoList.heightAuto == 'YES'? 'auto' : '100%'"
                           :isShowSelectColumn="formBoList.isShowSelectColumn == 'YES'"
                           :selectConfig="{align: 'center',type:formBoList.multiSelect?'checkbox':'radio',checkStrictly:formBoList.dataStyle=='tree' && !allowCascade}"
                           :pageConfig="pageConfig"
                           :hasPage="true"
                           :field="formBoList.idField"
                           url="/api-form/form/core/formBoList/EMP_ReturnWorkOrderBill_lis_wen/getData"
                           :urlConfig="urlConfig"
                           @selectMethod="selectMethod"
                           @cellDblClick="rowDblClick"
                           @refreshSearch="getListDataFun"
                           :loadDataOnstart="loadDataOnstart"
                           :showColumns="showColumns"
                           :defaultShowColumns="defaultShowColumns"
                           :expandConfig="expandConfig"
                           :cellStyle="cellStyle"
                           @urlData='handleUrlData'
                            :show-overflow="false"
                             :rowEditConfig="{autoClear:false}"
                             @cellClick="cellClick"
                  >
            <template #ID_="{row,rowIndex}">

            <span v-html="row['ID__display'] || row.ID_"></span>


            </template>

            <template #EMPTYPEEdit="{row,rowIndex}">
            <rx-select v-model="row['EMPTYPE']" style="width:100%;"
                       url="/api-system/system/core/sysDic/treeByKey?key=employeeType" value-field="value" text-field="name"
                        @changeDisplay="(options, valueField, textField) => selectCtlDisplayChange('EMPTYPE' + '_display',row['EMPTYPE'],row,options,valueField, textField)" @blur="selectCtlChange('EMPTYPE',row['EMPTYPE'],row)" :isHandleVisibleChange="true" />
            </template>

            <template #EMPSTATUS="{row,rowIndex}">

            {{row['EMPSTATUS_display'] || row.EMPSTATUS}}


            </template>

            <template #ENTERDATE="{row,rowIndex}">

            <span v-html="row['ENTERDATE_display'] || row.ENTERDATE"></span>


            </template>

            <template #BIZDATE="{row,rowIndex}">

            <span v-html="row['BIZDATE_display'] || row.BIZDATE"></span>


            </template>

            <template #INST_ID_="{row,rowIndex}">

            <template v-if="row['INST_ID__render']">
                <flow-render :row="row" field="INST_ID__render" :showTitle="false"
                             :showBpmInstLink="false"
                             :showTask="true"
                             :showTaskHandler="true"
                             :showBpmInstInfo="showBpmInstInfo"
                             :handleTask="handleTask" ></flow-render>
            </template>


            </template>

                    <!---开启搜索过滤2--begin-->
                    <!---开启搜索过滤2--end-->
                    <template v-for="col of columns" #[col.field]="{row}">
                      <span v-html="row[col.field + '_display'] || row[col.field]"></span>
                    </template>
                  </rx-grid>
                  <!--table-->
                  <!--layout-->
                  <rx-list-layout-view v-else
                                       :type="listLayout"
                                       :config="listLayoutJson[listLayout].config"
                                       :loadDataOnstart="loadDataOnstart"
                                       :defaultPageSize="10"
                                       :idField="formBoList.idField"
                                       :showPage="'YES'=='YES'"
                                       data-field="result.data"
                                       :columns="columns"
                                       url="/api-form/form/core/formBoList/EMP_ReturnWorkOrderBill_lis_wen/getData"
                                       ref="layoutTable"
                                       @selectChange="selectChange"
                                       @rowDblClick="rowDblClick"
                                       @rowClick="rowClick"
                                       :getCheckboxProps="getCheckboxPropsFun"
                                       :queryParam="queryParam"
                                       :allowRowSelect="true"
                                       :multiSelect="formBoList.multiSelect"
                                       @getListData="getListData"
                  >
                  </rx-list-layout-view>
                </div>
                <!--layout-->
              </div>
              <div v-if="(formBoList.multiSelect==true && formBoList.isPage=='YES' && formBoList.isDialog=='YES')" class="list-dialog-layout" showButton="true">
                <div class="list-dialog-header">
                  <div class="list-dialog-header-text">已选（{{selectedRows.length}}）</div>
                  <div class="list-dialog-del-all" @click.stop="cleanListDialogSelectAll"><rx-icon-show icon="icon-linea-shanchuqingchu"/>清空</div>
                </div>
                <a-table size="small" :rowKey="formBoList.idField"  v-bind="selectedTable">
                  <template #bodyCell="{ text, column, index, record }">
                    <template v-if="column.dataIndex === 'action'">
                      <span class="list-dialog-del-btn" @click="handleDeleteSelected(record,index)"><rx-icon-show icon='icon-lineVue3_delete'/></span>
                    </template>
                  </template>
                </a-table>
              </div>
            </div>
          </template>
        </rx-fit>
      </template>
    </rx-fit>
  </template>
</rx-layout>
</template>

<!--script-->
<script>
  export default {
    name: "EMP_ReturnWorkOrderBill_lis_wen",
    data() {
      return {
        buttonHidden:['head'],
        alias:"EMP_ReturnWorkOrderBill_lis_wen<#if pmtAlias??>_${pmtAlias}</#if>",
        columns:[{"field":"index","width":50,"title":"序号","type":"seq"},{"headerAlign":"left","slots":{"default":"ID_"},"showHeaderOverflow":true,"field":"ID_","showOverflow":true,"minWidth":100,"sortable":true,"title":this.i18NameParse('jrvrdyo043436','业务单号')},{"headerAlign":"left","slots":{"default":"EMPTYPE","edit":"EMPTYPEEdit"},"showHeaderOverflow":true,"field":"EMPTYPE","showOverflow":true,"allowCellEdit":true,"minWidth":100,"sortable":true,"title":this.i18NameParse('wgpsgvg005836','员工类型')},{"headerAlign":"left","slots":{"default":"EMPSTATUS"},"showHeaderOverflow":true,"field":"EMPSTATUS","showOverflow":true,"minWidth":100,"sortable":true,"title":this.i18NameParse('ylllcxk005836','员工状态')},{"headerAlign":"left","slots":{"default":"ENTERDATE"},"showHeaderOverflow":true,"field":"ENTERDATE","showOverflow":true,"minWidth":200,"sortable":true,"title":this.i18NameParse('tlscvsl005836','入职日期')},{"headerAlign":"left","slots":{"default":"BIZDATE"},"showHeaderOverflow":true,"field":"BIZDATE","showOverflow":true,"minWidth":100,"sortable":true,"title":this.i18NameParse('vlfqmur005836','离职日期')},{"headerAlign":"left","slots":{"default":"INST_ID_"},"showHeaderOverflow":true,"field":"INST_ID_","showOverflow":"ellipsis","minWidth":100,"sortable":true,"title":this.i18NameParse('eiilxfj757151','流程实例ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"HRORGUNIT","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('ubwhtel668122','人事业务组织ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"HRORGUNIT_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('mrdtwrt668122','人事业务组织')},{"headerAlign":"left","showHeaderOverflow":true,"field":"PERSON","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('iqkuzxm668122','姓名ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"PERSON_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('zflwiqz668122','姓名')},{"headerAlign":"left","showHeaderOverflow":true,"field":"EMPNUMBER","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('knecgqq668122','工号')},{"headerAlign":"left","showHeaderOverflow":true,"field":"GENDER","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('ebybkdj668122','性别')},{"headerAlign":"left","showHeaderOverflow":true,"field":"CREDENTIALTYPE","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('hmafdha668122','证件类型')},{"headerAlign":"left","showHeaderOverflow":true,"field":"IDCARDNO","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('dzsaeil668122','证件号码')},{"headerAlign":"left","showHeaderOverflow":true,"field":"NCELL","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('uhxbboc668122','手机号')},{"headerAlign":"left","showHeaderOverflow":true,"field":"COMPANY","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('iiuazth668122','所属公司ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"COMPANY_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('zkykbam668122','所属公司')},{"headerAlign":"left","showHeaderOverflow":true,"field":"DEPARTMENT","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('gofodbk668122','所属部门ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"DEPARTMENT_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('uwxrdjl668122','所属部门')},{"headerAlign":"left","showHeaderOverflow":true,"field":"POSITION","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('ulkcwjv668122','岗位ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"POSITION_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('ozjrqtf668122','岗位')},{"headerAlign":"left","showHeaderOverflow":true,"field":"LABCONTRACTFIRSTPARTY","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('zzxnpkb668122','用印主体')},{"headerAlign":"left","showHeaderOverflow":true,"field":"RESIDENCEADDRESS","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('wrffogi668122','户口地址')},{"headerAlign":"left","showHeaderOverflow":true,"field":"REMARK","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('lghuipu668122','说明')},{"headerAlign":"left","showHeaderOverflow":true,"field":"SHRPERSONID","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('mqdsdfd668122','shr员工ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"RETURNWORKANNEX","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('bnrqfrm668122','附件')},{"headerAlign":"left","showHeaderOverflow":true,"field":"WORKTIME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('haowbju668122','工时制度')},{"headerAlign":"left","showHeaderOverflow":true,"field":"CONTRACTENDMETHOD","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('lvdhhgu668122','合同终止方式')},{"headerAlign":"left","showHeaderOverflow":true,"field":"INSURANCECODE","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('tnabfpj668122','社会保险代码')},{"headerAlign":"left","showHeaderOverflow":true,"field":"OPERATOR","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('vkrmrkm668122','经办人ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"OPERATOR_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('wbyhmlq668122','经办人')},{"headerAlign":"left","showHeaderOverflow":true,"field":"OPERATORPHONE","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('tflgzlm668122','经办人电话')},{"headerAlign":"left","showHeaderOverflow":true,"field":"OPERATORID","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('anqwjeo668122','经办人ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"INPUT_OW3DC","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('lzsrrys668122','单据编号')},{"headerAlign":"left","showHeaderOverflow":true,"field":"RETIREAPPLYBILLID","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('nxehzgs668122','退休申请单单据id')},{"headerAlign":"left","showHeaderOverflow":true,"field":"RESIGNAPPROVALBILLID","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('gtpbcel668122','离职审批单据id')},{"headerAlign":"left","showHeaderOverflow":true,"field":"RESIGNAPPROVALBILLNUM","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('hzcnrcc668122','离职审批单据编码')},{"headerAlign":"left","showHeaderOverflow":true,"field":"HRORGUNITKEY","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('aoejkvy668122','人事业务组织编码')},{"headerAlign":"left","showHeaderOverflow":true,"field":"ORGLONGNAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('lpadbue668122','现任部门长名称ID')},{"headerAlign":"left","showHeaderOverflow":true,"field":"ORGLONGNAME_NAME","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('gjiitvb668122','现任部门长名称')}],
        expandConfig:{
        },
        urlConfig:{
          ajaxType:'post',
          contentType:'json',
          queryParam:{},
          dataField:'result.data',
          totalField:'result.totalCount'
        },
        pageConfig:{
          pageSize:10,
          pageSizes:[10,20,30,40,50]
        },
        loadDataOnstart:true,
        //rx-fit,搜索栏放在头部或者 弹框 ；
        isheader:true,
        islayout:false,
        searches:[],
        topButtonColumns:[{"btnName":"EMP_ReturnWorkOrderBill_list_Add","needConfig":true,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"新增\",\"en-US\":\"New\",\"ja-JP\":\"\"}","isLeaf":true,"btnLabel":this.i18NameParse('leujhdd139165','新增'),"btnIcon":this.getIcon('leujhdd139165','{\"type\":\"jpaasIcon\",\"icon\":\"iconadd\"}'),"toolId":1,"btnClick":"onAdd","idx_":"leujhdd139165","btnShow":"","serial":1,"btnStyle":"primary","preDef":true,"toolPid":0,"btnType":"listMethod","config":{"isMax":"YES","width":800,"height":600}},{"btnName":"EMP_ReturnWorkOrderBill_list_Edit","needConfig":true,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"编辑\",\"en-US\":\"Edit\",\"ja-JP\":\"編集\"}","isLeaf":true,"btnLabel":this.i18NameParse('yqxbxpd139165','编辑'),"btnIcon":this.getIcon('yqxbxpd139165','{\"type\":\"jpaasIcon\",\"icon\":\"iconbrush\"}'),"toolId":2,"btnClick":"onEdit","idx_":"yqxbxpd139165","btnShow":"","serial":2,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":{"isMax":"YES","width":800,"height":600}},{"btnName":"EMP_ReturnWorkOrderBill_list_Remove","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"删除\",\"en-US\":\"Delete\",\"ja-JP\":\"削除＃サクジョ＃\"}","isLeaf":true,"btnLabel":this.i18NameParse('bkdcpxf139165','删除'),"btnIcon":this.getIcon('bkdcpxf139165','{\"type\":\"jpaasIcon\",\"icon\":\"icontrash\"}'),"toolId":3,"btnClick":"onRemove","idx_":"bkdcpxf139165","btnShow":"","serial":3,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_Refresh","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"刷新\",\"en-US\":\"Refresh\",\"ja-JP\":\"\"}","isLeaf":true,"btnLabel":this.i18NameParse('yynsrut139165','刷新'),"btnIcon":this.getIcon('yynsrut139165','{\"iconType\":\"icon-park\",\"name\":\"refresh\",\"theme\":\"outline\",\"fill\":\"#333\",\"strokeLinejoin\":\"round\",\"strokeLinecap\":\"round\",\"strokeWidth\":4}'),"toolId":6,"btnClick":"onRefresh","idx_":"yynsrut139165","btnShow":"","serial":4,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_openCustomListPage","needConfig":true,"btnType_name":"打开列表","isSetedBtn":true,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"预览电子签\"}","btnLabel":this.i18NameParse('nxqmjvb903574','预览电子签'),"btnIcon":this.getIcon('nxqmjvb903574',''),"toolId":101,"btnClick":"openCustomListPage","idx_":"nxqmjvb903574","btnShow":"","serial":5,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"openCustomListPage","config":{"boList":"","boListId":"","name":"","alias":"","listConfig":"{\"boListId\":\"1849115854067773442\",\"name\":\"合同模板预览列表\",\"alias\":\"scmc_contracttemplate_priview_list\",\"boList\":\"{\\\"text\\\":\\\"合同模板预览列表\\\",\\\"value\\\":\\\"scmc_contracttemplate_priview_list\\\"}\",\"pmtAlias\":\"\",\"validate\":\"single\",\"fieldMap\":\"[{\\\"destType\\\":\\\"field\\\",\\\"destField\\\":\\\"BIZ_MODEL_ID_\\\",\\\"srcField\\\":\\\"formSolution.bodefId\\\",\\\"dataType\\\":\\\"string\\\",\\\"tablePre\\\":\\\"\\\",\\\"fieldOp\\\":\\\"LK\\\",\\\"destValue\\\":\\\"1851549567816826882\\\",\\\"idx_\\\":1,\\\"autoFilter\\\":\\\"YES\\\",\\\"key\\\":\\\"BIZ_MODEL_ID_\\\",\\\"label\\\":\\\"业务模型\\\"},{\\\"destType\\\":\\\"field\\\",\\\"destField\\\":\\\"bizBillId\\\",\\\"srcField\\\":\\\"ID_\\\",\\\"dataType\\\":\\\"string\\\",\\\"tablePre\\\":\\\"\\\",\\\"fieldOp\\\":\\\"LK\\\",\\\"destValue\\\":\\\"\\\",\\\"idx_\\\":2,\\\"autoFilter\\\":\\\"NO\\\",\\\"key\\\":\\\"bizBillId\\\",\\\"label\\\":\\\"数据主键\\\"}]\",\"isMax\":\"YES\",\"height\":600,\"width\":800,\"model\":false}"}},{"btnName":"EMP_ReturnWorkOrderBill_list_Export","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"导出EXCEL\",\"en-US\":\"Export To Excel\",\"ja-JP\":\"エクスポートEXCEL\"}","isLeaf":true,"btnLabel":this.i18NameParse('mvgjhji171776','导出EXCEL'),"btnIcon":this.getIcon('mvgjhji171776','{\"type\":\"jpaasIcon\",\"icon\":\"icondaochu\"}'),"toolId":8,"btnClick":"onXLSExportShow","idx_":"mvgjhji171776","btnShow":"","serial":6,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_ExportConfig","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"配置导出模板\",\"en-US\":\"Configure Export Template\",\"ja-JP\":\"エクスポートテンプレートの構成\"}","isLeaf":true,"btnLabel":this.i18NameParse('yxbbqiu171776','配置导出模板'),"btnIcon":this.getIcon('yxbbqiu171776','{\"type\":\"jpaasIcon\",\"icon\":\"iconsend\"}'),"toolId":15,"btnClick":"onXLSExport","idx_":"yxbbqiu171776","btnShow":"","serial":7,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_Save","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"保存\",\"en-US\":\"Save\",\"ja-JP\":\"\"}","isLeaf":true,"btnLabel":this.i18NameParse('ybvtrot248737','保存'),"btnIcon":this.getIcon('ybvtrot248737','{\"type\":\"jpaasIcon\",\"icon\":\"iconVue3jpaas-icon_baocun\"}'),"toolId":7,"btnClick":"onRowsSave","idx_":"ybvtrot248737","btnShow":"","serial":8,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_PrintQrCode","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"打印二维码\",\"en-US\":\"Print QR Code\",\"ja-JP\":\"2次元コードの印刷\"}","isLeaf":true,"btnLabel":this.i18NameParse('kzgpzjj248737','打印二维码'),"btnIcon":this.getIcon('kzgpzjj248737','{\"type\":\"jpaasIcon\",\"icon\":\"iconorder\"}'),"toolId":14,"btnClick":"onPrintQrCode","idx_":"kzgpzjj248737","btnShow":"","serial":9,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_Import","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"导入\",\"en-US\":\"Import\",\"ja-JP\":\"\"}","isLeaf":true,"btnLabel":this.i18NameParse('atshgse248737','导入'),"btnIcon":this.getIcon('atshgse248737','{\"type\":\"jpaasIcon\",\"icon\":\"icondaoru\"}'),"toolId":9,"btnClick":"onImport","idx_":"atshgse248737","btnShow":"","serial":10,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""},{"btnName":"EMP_ReturnWorkOrderBill_list_fullScreen","needConfig":false,"btnPreCond":"","i18nJson":"{\"zh-CN\":\"全屏\"}","isLeaf":true,"btnLabel":this.i18NameParse('mzvqads248737','全屏'),"btnIcon":this.getIcon('mzvqads248737','{\"type\":\"jpaasIcon\",\"icon\":\"iconmodal-fullscreen\"}'),"toolId":16,"btnClick":"toggleFullScreen","idx_":"mzvqads248737","btnShow":"","serial":11,"btnStyle":"default","preDef":true,"toolPid":0,"btnType":"listMethod","config":""}],

        //<!---开启搜索过滤3--begin-->
       // <!---开启搜索过滤3--end-->
        temVar:{},
        flowData:[],
        formBoList:{
          isPage: 'YES',
          isShowSelectColumn: 'YES',
          multiSelect:
              <#if params ?? && params.single ?? && params.single == "false" >
          ${(params.single=="true")?string('false','true')},
          <#elseif params ?? && params.single == "true" >
      false,
          <#else>
      ${formBoList.multiSelect},
    </#if>
      formAlias: 'EMP_ReturnWorkOrderBill',
          formAddAlias: 'EMP_ReturnWorkOrderBill',
          formDetailAlias: 'EMP_ReturnWorkOrderBill',
          rowEdit: 'YES',
          isMax: 'YES',
          width: 780,
          height: 480,
          isShade: 'YES',
          tableStyle:3,
          lineHeight:40,
          isShowView: 'NO',
          heightAuto:'YES',
          isShowSearch: 'YES',
          isFieldShow: 'YES',
          id: '1963877183424307202',
          appId: '1781325137178607617',
          name: '测试行编辑组件显示问题_wen',
          dataStyle: 'list',
          idField: 'ID_',
          textField: '',
          parentField: '',
          publishConf: [],
          instColumnConfig: [],
          key: 'EMP_ReturnWorkOrderBill_lis_wen',
          isDialog:'NO',
          isTreeDlg:'NO',
          isConfig:'NO',
          busSolution:'',
          isGridSelected: 'NO'
    },
      //默认查询条件参数
      tmpQueryParams: {
        "Q_INST_STATUS__S_MLK":{autoFilter:'YES',tablePre:'',fieldName:'INST_STATUS_',fieldOp:'MLK',defaultValConf:{"type":"select","defaultVal":""}},
      },
      queryId:'<#if params?? && params.queryId??>${params.queryId}</#if>',
          showColumns:<#if showColumns??>${showColumns}<#else>[]</#if>,
        defaultShowColumns:<#if defaultShowColumns??>${defaultShowColumns}<#else>[]</#if>,
        rowButtons:[],
            btnRight:<#if btnRight??>${btnRight}<#else>[]</#if>,
        hasAllRight:'<#if hasAllRight??>${hasAllRight}</#if>',
            pmtDatas:<#if pmtDatas??>${pmtDatas}<#else>{}</#if>,
      groupViewJson:[],
          listLayoutJson:{"openBoard":{"name":"看板视图","status":false,"config":""}},
          linkRenders:    {}
,
      linkDefs:    {}
,
      fileRenders:    {}
,
      //已选择列表
      selectedTable:{
        pagination: false,
            scroll: {y:580},
        columns : [
          ...[],
          {
            title:this.$ti18('rxList.action','操作'),
            dataIndex:'action',
            align:'center',
            width:50,
            scopedSlots:{customRender:'action'}
          }
        ],
            dataSource:this.selectedRows?this.selectedRows:[],
      },
      fieldRequired:[],
      urlParams:{
        <#if params??&&(params?size>0)>
            <#assign  keys=params?keys/>
            <#list keys as key>
        "${key}":`${params[key]}`,
      </#list>
      </#if>
      },
    }
    },
    created() {
      // 初始化过滤展示列
      this.$nextTick(() => {
        if (this.dialogVm?.fieldShowList?.length > 0) {
            this.getTableObj().initColumns(this.dialogVm.fieldShowList)
        }
        console.log('searches',this.columns);
       })
    },
    methods: {
    handleRemove(i) {
        this.urlConfig.queryParam[i.field] = null;
        setTimeout(() => {
                   console.log('asdfasd')
        	this.searchAll();
         }, 200)
    },
      //插入单元格点击事件, cellInfo 单元格信息 {row：行信息 rowIndex: 行下标 column：列信息 columnIndex:列下标, $event: 内置事件}
                handleCellClick(cellInfo){
                    this.$message.warning('单元格点击事件')
                    console.log(cellInfo, 'cellinfo');
                }//插入行点击函数
    },
    computed: {
    conditionTags() {
      	const obj2 = this.urlConfig.queryParam;
        const obj =  this.columns;
      	const safeConditions = Object.keys(obj2).filter(x => {
            return obj.some(y => x.replace('_', '').includes(y.field));
        });

        return safeConditions.map(x => {
            const column = obj.find(y => x.replace('_', '').includes(y.field));
            return {
                field: x,
                label: column?.title,
                value: obj2[x]
            }
        }).filter(x => x.value);
      },
      // 固定显示的按钮
      fixedButtons() {
          const defaults = ['toggleFullScreen', 'onXLSExportShow', 'onRefresh'];
          return this.topButtonColumns.filter(x => defaults.includes(x.btnClick));
      },
      // 排除固定显示的按钮
      restButtons() {
          const defaults = ['toggleFullScreen', 'onXLSExportShow', 'onRefresh', 'onXLSExport'];
          return this.topButtonColumns.filter(x => !defaults.includes(x.btnClick));
      },
      // XLSExport下拉默认导出按钮
      defaultDropdown() {
        const defaults = ['onXLSExport'];
        return this.topButtonColumns.filter(x => defaults.includes(x.btnClick));
      },
     // 视图控制
      viewSetting() {
        return {"iconType":"icon-park","name":"system","theme":"outline","fill":"#333","strokeLinejoin":"round","strokeLinecap":"round","strokeWidth":4}
      }
    },
  }
</script>
<!--script-->

<style scoped>

</style>
