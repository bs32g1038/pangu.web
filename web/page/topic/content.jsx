import React from 'react';
import styles from './style.module.scss';
import CollectionSvg from '../../components/svgs/collection';
import LikeSvg from '../../components/svgs/like';
import ReplySvg from '../../components/svgs/reply';
import SiderPersonInfo from '../../components/SiderPersonInfo';

export default () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.topicWrap}>
                <div className="header topic_header">
                    <span className={styles.title}>Node 12 值得关注的新特性</span>
                    <button className={styles.collectBtn} type="button">
                        收藏
                    </button>
                    <div className={styles.meta}>
                        <div className={styles.metaLeft}>
                            <span>发布于 4 个月前</span>
                            <span className={styles.tagName}>来自·分享</span>
                        </div>
                        <div className={styles.reaction}>
                            <div className={styles.reactionItem}>
                                <CollectionSvg className={styles.icon}></CollectionSvg>
                                <span>收藏</span>
                                <span>0</span>
                            </div>
                            <div className={styles.reactionItem}>
                                <LikeSvg className={styles.icon}></LikeSvg>
                                <span>赞</span>
                                <span>3</span>
                            </div>
                            <div className={styles.reactionItem}>
                                <span>浏览:</span>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detailAbout}>
                    <a className={styles.flyAvatar} href="/u/19986288/">
                        <img src="https://res.layui.com/images/fly/avatar/6.jpg" alt="北辰Polaris" />{' '}
                    </a>
                    <div className={styles.flyDetailUser}>
                        <a href="/u/19986288/" className="fly-link">
                            <cite>北辰Polaris</cite>
                        </a>
                        <span>6分钟前</span>
                    </div>
                    <div className={styles.detailHits}>
                        <span style={{ paddingRight: '10px', color: '#FF7200' }}>悬赏：20飞吻</span>{' '}
                    </div>
                </div>
                <div className="markdown-body css-1pm7f2m">
                    <h3>图像预处理主要有以下几个步骤：</h3>
                    <p>
                        <em>所有的代码函数都是以 python 为例</em>
                    </p>
                    <h4>1、导入图像</h4>
                    <p>
                        可以使用 opencv 库，
                        对图像进行导入，导入的方式可以选择，灰度图片，rgb图片，rgba图片等方式进行导入。
                    </p>
                    <p>
                        具体参考该库的 api 函数 <code>cv.imread()</code>
                    </p>
                    <h4>2、去噪处理</h4>
                    <p>常用的去噪方法有：均值滤波、高斯滤波、中值滤波、双边滤波</p>
                    <h4>3、图像增强</h4>
                    <p>常用的图像增强方法有： 直方图均衡变换、灰度级校正、灰度变换</p>
                    <p>常用的锐化方法有：梯度法、算子、高通滤波、掩模匹配法、统计差值法</p>
                    <h4>4、彩色图像转变成灰度图</h4>
                    <p>彩色图像转灰度图，可以加快图像处理速度，减少内存占用，降低数据干扰，提高识别度。</p>
                    <h4>5、灰度图转化成二值图</h4>
                    <p>图像像素数值化。</p>
                    <p>其次还有，边缘检测/分割 、 直方图匹配/轮廓匹配 等等的处理。</p>
                </div>
                <hr className={styles.hr} />
                <div className={styles.replyWrap}>
                    <div className={styles.replyWrapHeader}>
                        <span className="col_fade">共收到 17 条回复</span>
                    </div>
                    <div className={styles.replyList} id="5d6cb2c8d50f572345910d05">
                        <div className={styles.replyItem}>
                            <a href="/user/PanZhangOne" className={styles.useravatar}>
                                <img
                                    src="https://avatars2.githubusercontent.com/u/20785938?v=4&amp;s=120"
                                    title="PanZhangOne"
                                />
                            </a>
                            <div className={styles.replyContent}>
                                <div className={styles.replyInfo}>
                                    <div className={styles.userInfo}>
                                        <a className={styles.replyAuthor} href="/user/PanZhangOne">
                                            PanZhangOne
                                        </a>
                                        <a className={styles.replyTime} href="#5d6cb2c8d50f572345910d05">
                                            1楼•3 小时前
                                        </a>
                                    </div>
                                    <div className={styles.userAction}>
                                        <span className={styles.likeAction}>
                                            <LikeSvg></LikeSvg>
                                            <span className="up-count">10</span>
                                        </span>
                                        <span className={styles.replyAction}>
                                            <ReplySvg></ReplySvg>
                                            回复
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.markdownText}>
                                    <p>弱类型语言, JS的class是基于原型的, 和Java的class不太一样</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
