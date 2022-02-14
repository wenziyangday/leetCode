import time
from selenium import webdriver
b = webdriver.Chrome(r'd:\chromedriver_win32(1)\chromedriver.exe')
time.sleep(3)
b.get("http://backstage.benlai.com/Basic/SysLogin_dbc.aspx")


b.find_element_by_id('txtUid').send_keys('1009940')
b.find_element_by_id('txtPwd').send_keys('123456')
b.find_element_by_id('txtUserName').send_keys('李甜甜')
b.find_element_by_id('btnLogin').click()


b.find_element_by_id('leftFrame')
