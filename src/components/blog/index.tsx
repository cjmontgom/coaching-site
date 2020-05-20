import React from "react";
import {BlogCard, BlogContentsWrapper, PlaceHolderCard} from "../../styles/blog/index.styles";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import BlogTemplate from "./blogTemplate";
import {SmallerBlogImage} from "../../styles/blog/blog.styles";
import church from "../../images/church.png";
import vcard from "../../images/v-card.png";
import {Body, Header} from "../../styles/main.styles";

const BlogContents = () => {

    let { path, url } = useRouteMatch();

    return (
        <BlogContentsWrapper>
            <Switch>
                <Route exact path={path}>
                    <BlogCard to={`${url}/purity-culture`}>
                        <SmallerBlogImage src={vcard} alt="A card saying 'v card'" />
                        <Header>PURITY CULTURE</Header>
                        <Body>
                            <i>jsada oijsf jjfsajndf ihsfdn kmm</i>
                        </Body>
                    </BlogCard>
                    <BlogCard to={`${url}/by-whos-authority`}>
                        <SmallerBlogImage src={church} alt="A church building."/>
                        <Header>BY WHO'S AUTHORITY?</Header>
                        <Body>
                            <i>Gender, Power, and the Female Christian Blogger</i>
                        </Body>
                    </BlogCard>
                    <PlaceHolderCard/>
                </Route>
                <Route path={`${path}/:blogId`}>
                    <BlogTemplate />
                </Route>
            </Switch>

        </BlogContentsWrapper>
    );
};

export default BlogContents;
