import { LockIcon } from "lucide-react";
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Collection } from "../../types";
import { Link } from "react-router";

const CollectionCard = ({
    collection,
}:{
    collection: Collection
}) => {
    return ( 
        <Link 
        
        data-astro-prefetch to='/collection' className="group relative">
        <Card
          key={collection.id}
          style={{
            borderLeftColor: collection.vibe,
          }}
          className={`
          overflow-hidden rounded-2xl  transition-all duration-300 hover:shadow-md h-44 group
        `}
          // style={{ borderLeftColor: collection.collection_color }}
        >
          <div
            className="w-4 h-4 absolute rounded-tl-lg rounded-br-lg  top-0 left-0  group-hover:animate-pulse group-hover:w-8 group-hover:h-8 duration-200 group-hover:opacity-80 "
            style={{
              background: collection.vibe,
            }}
          />
          <CardHeader>
            <div className="flex justify-between items-center gap-2">
              <CardTitle className="text-lg font-semibold truncate">
                {collection.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="text-xs border shadow-sm"
                style={{
                  border: `1px solid ${collection.vibe}`,
                  color: `${collection.vibe}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler w-3 h-3 mr-1 icons-tabler-outline icon-tabler-folder"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                </svg>
                {collection.total_links}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3  truncate">
              {collection.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {collection.tags.split(",").map((tag) => (
                <Badge
                  variant="outline"
                  key={tag}
                  className="text-xs w-auto truncate"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex absolute bottom-2 right-2 flex-row gap-2 items-center">
          {collection.is_public !== "true" && (
            <LockIcon size={18} className=" right-2 text-gray-800" />
          )}
          <span className="text-gray-600 block  text-xs">
            {collection.url_slug}
          </span>
        </div>
       </Link> );
}
 
export default CollectionCard;