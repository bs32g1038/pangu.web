import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

export const timeAgo = timestamp => {
    return dayjs(timestamp).fromNow();
};

export const parseTime = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(timestamp).format(format);
};

export const timeTo = (startTime, endTime) => {
    return dayjs(startTime).to(endTime, true);
};
