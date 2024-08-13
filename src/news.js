import React from "react";
import { List, Avatar, Breadcrumb } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import "./App.css";

const newsData = [
  {
    title: "板橋大遠百營業至2024/7/31",
    description: "板橋大遠百店營業至2024/7/31止，百貨內部即將改裝，重位產積縮減，為維護香師服精品質，故不再續約。",
    datetime: "2024-08-09",
    image: "達百州酒-1-72x54.jpg",
    url: "/"
  },
  {
    title: "2024/5/15起門市營業時間異動公告",
    description: "2024年5月15日起門市營業時間異動公告。",
    datetime: "2024-08-08",
    image: "門市飛翼公告-72x54.jpg",
    url: "/"
  },
  {
    title: "4/18日起誠品站前門市新址",
    description: "誠品站前門市即將搬新家！2022/4/18日起，誠品站前店再於台北車站B1（M出口斜對面）為您服務！",
    datetime: "2024-08-07",
    image: "2020414-誠品遊移酸事(48出口對面)-百貨門市POP;官網最新消息:21×29.7cm-72×54.jpg",
    url: "/"
  },
  {
    title: "2023母親節活動",
    description: "母親節蛋糕送禮最佳選擇，母親節蛋糕補選，用料新鮮實在的香帥母親節蛋糕，用心堅持四十年的好味道！招牌經典芋泥卷。",
    datetime: "2024-08-06",
    image: "2023banner-72x54.jpg",
    url: "/"
  },
  {
    title: "2022 黑貓宅急便通知",
    description: "2022年11月10日至11月20日，黑貓宅急便無法提供服務。",
    datetime: "2024-08-05",
    image: "ING 5766-72x54.jpg",
    url: "/"
  },
  {
    title: "2018行政院環保署新規定",
    description: "【2018行政院環保署】即日起本場所將不免費提供購物用塑膠袋，如有不便之處，敬請見諒！更多詳情資訊，請參考行政院環保署網站。",
    datetime: "2024-08-04",
    image: "1-4_120-72x54.jpg",
    url: "/"
  }
];

function BreadCrumbs() {
  return (
    <div className="breadcrumb-container">
      <span className="breadcrumb-label">你的位置:</span>
      <Breadcrumb style={{ backgroundColor: '#ffffff', display: 'inline-flex', verticalAlign: 'middle' }}>
        <Breadcrumb.Item>首頁</Breadcrumb.Item>
        <Breadcrumb.Item>最新消息</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

function NewsList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={newsData}
      renderItem={(item) => (
        <List.Item style={{ backgroundColor: "#fff", padding: '16px 24px' }}>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={<a href={item.url} rel="noopener noreferrer">{item.title}</a>}
            description={item.description}
          />
          <div>{item.datetime}</div>
        </List.Item>
      )}
    />
  );
}

export function News() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: '100vh' }}>
      <div className="Content-cake">
        <BreadCrumbs />
        <NewsList />
      </div>
    </div>
  );
}

// 修正了以下部分：

// 1. 删除了多余的 `DefaultList` 函数定义。
// 2. 修正了 `Background` 组件的定义，使其可以接受并渲染 `children`。
// 3. 删除了重复的 `import` 语句。

export default News;
