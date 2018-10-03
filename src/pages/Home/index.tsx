import * as React from "react";
import { Link } from "react-router-dom";

import projects from "./projects";
import "./index.scss";

interface Props {
  match: any;
}

export default class Home extends React.Component<Props> {
  state = {
    project: null,
    nextSlug: null,
    prevSlug: null
  };

  componentDidMount() {
    this.updateDemo(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      this.updateDemo(nextProps);
    }
  }

  updateDemo = props => {
    const { match } = props;
    const { slug } = match.params;

    if (slug && slug.length > 0) {
      const projectIdx = projects.findIndex(project => project.slug === slug);
      this.setState({
        project: projects[projectIdx],
        prevSlug: projectIdx > 0 ? projects[projectIdx - 1].slug : null,
        nextSlug:
          projectIdx + 1 < projects.length
            ? projects[projectIdx + 1].slug
            : null
      });
      return;
    }

    this.setState({
      project: projects[0],
      nextSlug: projects.length > 1 ? projects[1].slug : null
    });
  };

  render() {
    const { project, prevSlug, nextSlug } = this.state;

    if (!project || !project.title) {
      return <div id="page-loading" />;
    }

    return (
      <section id="home-page">
        <iframe
          src={project.iframeUrl}
          className="demo-section"
          title={project.title}
        />

        <div className="demo-navigation">
          <div className="container">
            <div className="demo-description">
              <h1>{project.title}</h1>
              <p>{project.description}</p>

              <ul className="demo-link">
                {project.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.url}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="demo-navigation-arrows">
              {prevSlug && <Link to={`/demo/${prevSlug}`}>← previous</Link>}

              {nextSlug && <Link to={`/demo/${nextSlug}`}>next →</Link>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
