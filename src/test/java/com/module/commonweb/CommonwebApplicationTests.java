package com.module.commonweb;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.module.mapper.*;
import com.module.pojo.Article;
import com.module.pojo.Sorttype;
import com.module.pojo.Userinfo;
import com.module.util.CrawlerUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@SpringBootTest
class CommonwebApplicationTests {

    @Autowired
    UserinfoMapper userinfoMapper;
    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    SorttypeMapper sorttypeMapper;


    public String createTag() {
        String tag = "";
        Random random = new Random();
        int num = random.nextInt(5) + 1;
        for (int i = 1; i <= num; i++) {

            List<Sorttype> sorttypeList = sorttypeMapper.selectAll(null);
            int index = random.nextInt(sorttypeList.size());
            tag = tag + sorttypeList.get(index).getSortname() + ",";
        }
        tag = tag.substring(0, tag.length() - 1);
        return tag;

    }

    //@Test
    void contextLoads() {
        for (int i = 1; i < 40; i++) {
            String url = "http://service.5sing.kugou.com/mv/listNew?jsoncallback=jQuery1703316953231266626_1647179362095&from=web&type=1&sortType=3&pageIndex={AA}&pageSize=30&kind=0&_=1647179362129&_=1647179362129";
            url = url.replace("{AA}", i + "");
            String s = CrawlerUtils.getIndexHtml(url);
            s = s.substring(40);
            s = s.substring(0, s.length() - 1);
            s = unicodeToString(s);
            System.out.println("s = " + s);
            System.out.println("jQuery1703316953231266626_1647179362095(".length());
            JSONObject a1 = JSON.parseObject(s);
            JSONArray arr = a1.getJSONObject("data").getJSONArray("list");
            for (Object o : arr) {
                Article article = new Article();
                JSONObject obj = (JSONObject) o;
                String cover_url = obj.getString("cover_url");
                System.out.println("cover_url = " + cover_url);
                article.setPicurl(cover_url);
                article.setTitle(obj.getString("title"));
                article.setContent(obj.getString("intro"));
                article.setCreatetime(new Date());
                article.setHits(0);
                article.setAuthor(obj.getJSONObject("user").getString("NN"));
                article.setIntro(obj.getString("quality"));
                article.setState("正常");
                //article.setType(obj.getString("song_type"));
                article.setOutline("http://www.javalm.cn/file/1.mp3");
                article.setType(createTag());
                articleMapper.insertArticle(article);
            }

        }
    }

    public static String unicodeToString(String str) {

        Pattern pattern = Pattern.compile("(\\\\u(\\p{XDigit}{4}))");
        Matcher matcher = pattern.matcher(str);
        char ch;
        while (matcher.find()) {
            ch = (char) Integer.parseInt(matcher.group(2), 16);
            str = str.replace(matcher.group(1), ch + "");
        }
        return str;
    }
}
