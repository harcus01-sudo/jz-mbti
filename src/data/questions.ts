export interface Question {
  id: number;
  text: string;
  guide?: string;
  optionA: { text: string; value: string };
  optionB: { text: string; value: string };
  dimension: 'E/I' | 'S/N' | 'T/F' | 'J/P';
}

export const questions: Question[] = [
  // E/I (10)
  { id: 1, text: "在陌生的社交场合（比如新同学聚会），你通常？", guide: "想象一下你刚推开聚会包厢的门，里面大部分人你都不认识...", optionA: { text: "很快和大家打成一片", value: "E" }, optionB: { text: "比较慢热，更喜欢和熟悉的人待在一起", value: "I" }, dimension: 'E/I' },
  { id: 2, text: "终于熬到了周末，你更倾向于怎么度过？", guide: "经过了连续五天的高强度学习或工作，你现在最需要的是...", optionA: { text: "约朋友出去玩，去热闹的地方打卡", value: "E" }, optionB: { text: "宅在家里看剧、打游戏，或者自己待着", value: "I" }, dimension: 'E/I' },
  { id: 3, text: "遇到特别开心的事情，你第一反应是？", optionA: { text: "立刻发朋友圈或者找朋友分享喜悦", value: "E" }, optionB: { text: "自己默默开心，或者只告诉最亲近的一两个人", value: "I" }, dimension: 'E/I' },
  { id: 4, text: "遇到难题或困惑时，你更喜欢？", guide: "当遇到一个让你百思不得其解的复杂问题时...", optionA: { text: "找人讨论，在交流中理清思路", value: "E" }, optionB: { text: "自己一个人静静琢磨，寻找答案", value: "I" }, dimension: 'E/I' },
  { id: 5, text: "和朋友聊天时，你更偏好哪种方式？", optionA: { text: "发语音或者直接打电话，沟通效率高", value: "E" }, optionB: { text: "发文字，可以字斟句酌，不用立刻回应", value: "I" }, dimension: 'E/I' },
  { id: 6, text: "你的兴趣爱好通常是？", optionA: { text: "广泛参与各种活动，喜欢尝试新鲜事物", value: "E" }, optionB: { text: "深入钻研少数几个自己真正热爱的领域", value: "I" }, dimension: 'E/I' },
  { id: 7, text: "什么样的情况会让你觉得“充满电”？", optionA: { text: "在一场热闹的派对或聚会中和大家狂欢", value: "E" }, optionB: { text: "享受一段无人打扰的独处时光", value: "I" }, dimension: 'E/I' },
  { id: 8, text: "结交新朋友对你来说？", optionA: { text: "很容易，我总能找到共同话题", value: "E" }, optionB: { text: "需要时间，我更看重深度的信任关系", value: "I" }, dimension: 'E/I' },
  { id: 9, text: "在办公室或自习室，你更喜欢哪种环境？", optionA: { text: "开放热闹，随时可以和旁边的人交流", value: "E" }, optionB: { text: "安静独立，有自己的私人空间不被打扰", value: "I" }, dimension: 'E/I' },
  { id: 10, text: "表达观点时，你通常是？", optionA: { text: "边说边想，脱口而出，思维活跃", value: "E" }, optionB: { text: "深思熟虑，在脑海里组织好语言再表达", value: "I" }, dimension: 'E/I' },

  // S/N (10)
  { id: 11, text: "玩新游戏或者用新软件时，你通常？", optionA: { text: "先看教程或者按部就班地摸索具体功能", value: "S" }, optionB: { text: "直接上手瞎点，凭直觉发现新玩法", value: "N" }, dimension: 'S/N' },
  { id: 12, text: "听课或者看文章时，你更关注？", optionA: { text: "具体的细节、例子和实际应用", value: "S" }, optionB: { text: "背后的概念、理论和未来的可能性", value: "N" }, dimension: 'S/N' },
  { id: 13, text: "你更喜欢哪种聊天内容？", optionA: { text: "聊最近发生的趣事、八卦、吃喝玩乐", value: "S" }, optionB: { text: "聊宇宙、未来、心理学或者天马行空的想法", value: "N" }, dimension: 'S/N' },
  { id: 14, text: "向别人描述一件物品时，你倾向于？", optionA: { text: "精确具体（如尺寸、颜色、材质）", value: "S" }, optionB: { text: "比喻或抽象（如给人的感觉、氛围）", value: "N" }, dimension: 'S/N' },
  { id: 15, text: "你的做事风格更偏向于？", optionA: { text: "脚踏实地，按部就班地完成任务", value: "S" }, optionB: { text: "脑洞大开，不拘一格地寻找新方法", value: "N" }, dimension: 'S/N' },
  { id: 16, text: "评价一部电影或小说时，你更看重？", optionA: { text: "剧情是否写实，逻辑是否严密无漏洞", value: "S" }, optionB: { text: "是否有深刻的隐喻，或者奇幻的设定", value: "N" }, dimension: 'S/N' },
  { id: 17, text: "面对一个新问题时，你通常会？", optionA: { text: "借鉴过去的成功经验，稳妥解决", value: "S" }, optionB: { text: "尝试全新的解决方案，哪怕有风险", value: "N" }, dimension: 'S/N' },
  { id: 18, text: "回忆过去的一段经历时，你更容易想起？", optionA: { text: "当时具体的细节、数据和发生的事情", value: "S" }, optionB: { text: "当时的整体印象、氛围和自己的感受", value: "N" }, dimension: 'S/N' },
  { id: 19, text: "欣赏艺术作品（如画作）时，你更看重？", optionA: { text: "技巧的精湛程度和画面的写实感", value: "S" }, optionB: { text: "作品表达的意境、思想和情感共鸣", value: "N" }, dimension: 'S/N' },
  { id: 20, text: "规划未来时，你更倾向于？", optionA: { text: "关注眼前的具体目标和可行的步骤", value: "S" }, optionB: { text: "构想长远的宏大愿景和无限可能", value: "N" }, dimension: 'S/N' },

  // T/F (9)
  { id: 21, text: "朋友遇到烦心事找你倾诉，你通常会？", guide: "朋友半夜给你发微信说被老板骂了，你的第一反应是...", optionA: { text: "帮TA分析问题，给出客观的解决建议", value: "T" }, optionB: { text: "先安抚TA的情绪，和TA共情，提供情绪价值", value: "F" }, dimension: 'T/F' },
  { id: 22, text: "在团队合作（比如小组作业）中，你认为更重要的是？", optionA: { text: "任务能高效、正确地完成，哪怕有争执", value: "T" }, optionB: { text: "团队氛围融洽，大家都很开心，互帮互助", value: "F" }, dimension: 'T/F' },
  { id: 23, text: "评价一个人的行为时，你更看重？", optionA: { text: "行为是否符合逻辑和客观标准", value: "T" }, optionB: { text: "行为背后的动机和对他人的影响", value: "F" }, dimension: 'T/F' },
  { id: 24, text: "做决定时，你主要依靠？", optionA: { text: "客观事实、数据和理性的分析", value: "T" }, optionB: { text: "个人的价值观、直觉和他人的感受", value: "F" }, dimension: 'T/F' },
  { id: 25, text: "面对别人的批评，你通常？", optionA: { text: "关注批评是否合理，有则改之", value: "T" }, optionB: { text: "容易感到受伤，或者觉得自己被否定了", value: "F" }, dimension: 'T/F' },
  { id: 26, text: "你的沟通方式更偏向于？", optionA: { text: "直言不讳，就事论事，效率优先", value: "T" }, optionB: { text: "委婉表达，照顾对方的面子和情绪", value: "F" }, dimension: 'T/F' },
  { id: 27, text: "你认为哪种特质更值得赞赏？", optionA: { text: "聪明、理性、客观、公正", value: "T" }, optionB: { text: "善良、温暖、体贴、有同理心", value: "F" }, dimension: 'T/F' },
  { id: 28, text: "发生争执时，你通常会？", optionA: { text: "一定要辩出个对错，坚持真理", value: "T" }, optionB: { text: "倾向于妥协或让步，以维持人际关系的和谐", value: "F" }, dimension: 'T/F' },
  { id: 29, text: "选择看什么类型的影视剧时，你更偏好？", optionA: { text: "烧脑、悬疑、科幻或者硬核纪录片", value: "T" }, optionB: { text: "感人、治愈、浪漫爱情或者家庭伦理剧", value: "F" }, dimension: 'T/F' },

  // J/P (9)
  { id: 30, text: "准备出去旅游时，你通常会？", guide: "好不容易攒了几天假，终于可以出去玩了...", optionA: { text: "提前做好详细的攻略和行程表，按计划行事", value: "J" }, optionB: { text: "订好机票酒店就走，走到哪算哪，享受盲盒感", value: "P" }, dimension: 'J/P' },
  { id: 31, text: "面对即将到来的考试或DDL（截止日期），你通常？", optionA: { text: "提前规划，按部就班地复习或完成", value: "J" }, optionB: { text: "经常拖延到最后时刻，靠爆发力极限操作", value: "P" }, dimension: 'J/P' },
  { id: 32, text: "你的桌面或者房间通常是？", optionA: { text: "比较整洁，东西都有固定的位置", value: "J" }, optionB: { text: "比较随意，乱中有序，自己能找到就行", value: "P" }, dimension: 'J/P' },
  { id: 33, text: "当原定的计划突然被打乱时，你通常会？", optionA: { text: "感到焦虑和烦躁，不喜欢失控的感觉", value: "J" }, optionB: { text: "觉得无所谓，顺其自然，甚至觉得有新鲜感", value: "P" }, dimension: 'J/P' },
  { id: 34, text: "你的工作或学习方式更偏向于？", optionA: { text: "先完成任务再痛快地玩，公私分明", value: "J" }, optionB: { text: "边玩边做，劳逸结合，随性而为", value: "P" }, dimension: 'J/P' },
  { id: 35, text: "做决定时，你更喜欢？", optionA: { text: "尽快敲定，不喜欢悬而未决的状态", value: "J" }, optionB: { text: "保留选项，收集更多信息，直到最后一刻", value: "P" }, dimension: 'J/P' },
  { id: 36, text: "对于规则和日程表，你的态度是？", optionA: { text: "严格遵守，这让我觉得有安全感和秩序感", value: "J" }, optionB: { text: "觉得受束缚，喜欢打破常规，灵活变通", value: "P" }, dimension: 'J/P' },
  { id: 37, text: "去超市购物时，你通常？", guide: "推着购物车走进一家大型超市...", optionA: { text: "列好清单，买完需要的东西就走", value: "J" }, optionB: { text: "随便逛逛，看到喜欢或打折的就买", value: "P" }, dimension: 'J/P' },
  { id: 38, text: "你更追求哪种生活状态？", optionA: { text: "稳定、有序、一切尽在掌握的可控生活", value: "J" }, optionB: { text: "充满变化、惊喜、不受拘束的自由生活", value: "P" }, dimension: 'J/P' }
];
