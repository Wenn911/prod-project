import { Comment } from "../../model/types/comment";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length 
                ? comments.map(comment => (
                    <CommentCard 
                        key={comment.id} 
                        className={cls.comment} 
                        comment={comment}
                        isLoading={isLoading}
                    />
                )
                )
                : <Text text={t('No comments')} />
            }
        </div>
    )
};

