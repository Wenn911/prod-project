import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities";

export interface ArticleDetailCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}