import {Review_Record} from "../types/ReviewRecord.types";
import {pool} from "../utils/db";

export class ReviewRecord implements Review_Record {
    constructor(
        public id: string,
        public rank: number,
        public title: string,
        public fullTitle: string,
        public year: number,
        public image: string,
        public crew: string,
        public imDbRating: number,
        public imDbRatingCount: number,
        public review: string,
    ) {
    }

    static async getAll(): Promise<ReviewRecord[]> {
        try {
            const [allReviews] = await pool.execute("SELECT * from `reviews`");
            return allReviews as ReviewRecord[];
        } catch (err) {
            throw new Error("Error occurred in getAll() " + err.message);
        }
    }

    static async getAllIds(): Promise<string[]> {
        try {
            const allIds = (await ReviewRecord.getAll()).map(review => review.id);
            return allIds;
        } catch (err) {
            throw new Error("Error occurred in GetAllIds() " + err.message);
        }

    }

    static async getOne(id: string) {
        try {
            const [oneReview] = await pool.execute("SELECT * FROM `reviews` WHERE `id`=:id", {
                id,
            });
            //if not found
            if ((oneReview as []).length === 0) return null;
            //if found
            return oneReview;
        } catch (err) {
            throw new Error("Error occurred in getOne() " + err.message);
        }
    }

    async insert(): Promise<string> {
        try {
            await pool.execute('INSERT INTO `reviews` (`id`, `rank`,`title`, `fullTitle`,`year`,`image`,`crew`,`imDbRating`,`imDbRatingCount`, `review`) ' +
                'VALUES (:id,:rank, :title,  :fullTitle,:year, :image, :crew, :imDbRating, :imDbRatingCount, :review)', {
                id: this.id,
                title: this.title,
                rank: this.rank,
                fullTitle: this.fullTitle,
                year: this.year,
                image: this.image,
                crew: this.crew,
                imDbRating: this.imDbRating,
                imDbRatingCount: this.imDbRatingCount,
                review: this.review,
            });
            const {id} = this;
            return id;
        } catch (err) {
            throw new Error("Error occurred in insert() " + err.message);
        }
    }
}