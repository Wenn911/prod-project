import { Comment } from "../../model/types/comment";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface Props {
    className?: string;
    comment? : Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: Props) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height="16px" width="100px" className={cls.username} />
                </div>
                <Skeleton 
                    width="100%" 
                    height={50}
                    className={cls.text}
                />
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    )
};

