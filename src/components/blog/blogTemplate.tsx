import React from "react";
import {useParams} from "react-router-dom";
import Form from "../home/form";
import AuthorityBlogPost from "./authorityBlogPost";
import PurityBlogPost from "./purityBlogPost";
import {TemplateWrapper} from "../../styles/blog/index.styles";

const BlogTemplate = () => {
  const { blogId } = useParams();

  return (
          <TemplateWrapper>
              {blogId === 'by-whos-authority'
              ? <AuthorityBlogPost/>
              : <PurityBlogPost/>
              }
              <Form/>
          </TemplateWrapper>
      );



};

export default BlogTemplate;
