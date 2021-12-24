import React, { useState } from "react";
import './Portfolio.css'
import { Grid, Tabs, Tab, Grow, Card, CardActionArea, CardMedia, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import resumeData from "../../utils/resumeData";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container spacing={1} className="section pb_45 pt_45">
            {/* Title */}
            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} indicatorColor="White" className="customTabs"
                    onChange={(event, newTabValue) => setTabValue(newTabValue)}>
                    <Tab label="All" value="All" className={
                        tabValue == "All" ? "customTabs_item active" : "customTabs_item"
                    }
                    />

                    {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={
                            tabValue == tag ? "customTabs_item active" : "customTabs_item"
                        }
                        />
                    ))}
                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {resumeData.projects.map(project => (
                        <>
                            {tabValue == project.tag || tabValue == "All" ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card className="customCard" onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className="customCard_image" image={project.images[0]} />
                                                <CardContent>
                                                    <Typography variant={'body2'} className="customCard_title">{project.title}</Typography>
                                                    <Typography variant="caption" className="customCard_caption">{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Grid>

            {/* Dialog */}
            <Dialog className="projectDialog" maxWidth={"md"} fullWidth open={projectDialog} onClose={() => setProjectDialog(false)}>
                <DialogTitle onClose={() => setProjectDialog(false)}>
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt="" className="projectDialog_image"/>
                <DialogContent style={{height: "80vh"}}>
                    {projectDialog.images && (
                        <ImageGallery images={projectDialog.images} />
                    )}

                    <Typography className="projectDialog_desc">
                    {projectDialog.description}
                    </Typography>
                    </DialogContent>
                <DialogActions className="projectDialog_actions">
                    {
                        projectDialog?.links?.map(link => (
                            <a href={link.link} target='_blank' rel="noopener noreferror" className="projectDialog_icon">
                                {link.icon}
                            </a>
                        ))
                    }
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Portfolio