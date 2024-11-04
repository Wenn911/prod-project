import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Input } from "shared";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { getAddNewCommentError, getAddNewCommentText } from "../model/selectors/addNewCommentSelector";
import { addNewCommentActions, addNewCommentReducer } from "../model/slices/addNewCommentSlice";
import cls from "./AddNewComment.module.scss";

interface Props {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList ={
    addNewComment: addNewCommentReducer
}

const AddNewComment = ({ className, onSendComment }: Props) => {
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value))
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, text, onSendComment])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewComment, {}, [className])}>
                <Input 
                    placeholder={t('Enter comment text')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
};

export default AddNewComment;
