import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { getSkills, getData } from "../../../redux/selectors";

import React from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1 solid black",
    margin: 25,
    paddingBottom: 14,
  },

  name: {
    fontSize: "30",
    marginBottom: 20,
  },
  details: {
    fontSize: 12,
    alignContent: "end",
  },
  page1: { flexDirection: "row", marginLeft: 25, marginRight: 25 },
  section1: { width: "28%" },
  section2: { width: "72%" },
  title: {
    fontSize: "25",
  },
  text: { fontSize: "14", marginBottom: 15, marginTop: 15 },
  education: { flexDirection: "row", width: "100%" },
  poject: { fontSize: "18", marginTop: 10 },
  container: { width: "200", marginTop: 10 },
  skill: {},
});

// Create Document Component
const MyDocument = ({ skills, data }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.name}>{data[0].name}</Text>
            <Text>{data[0].profesion}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.details}>{data[0].country}</Text>
            <Text style={styles.details}>{data[0].number}</Text>
            <Text style={styles.details}>{data[0].email}</Text>
            <Text style={styles.details}>{data[0].linkedIn}</Text>
            <Text style={styles.details}>{data[0].web}</Text>
          </View>
        </View>
        <View style={styles.page1}>
          <View style={styles.section1}>
            <Text style={styles.title}>Skills</Text>

            {skills.map((skill) => (
              <Text key={skill.key} style={styles.skill}>
                &bull; {skill.label}
              </Text>
            ))}
          </View>
          <View style={styles.section2}>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.text}>{data[0].summary}</Text>
            <Text style={styles.title}>Projects</Text>
            <Text style={styles.poject}>{data[0].nameProject}</Text>

            <Link>
              <Text style={styles.details}>{data[0].lickProject}</Text>
            </Link>
            <Text style={styles.text}>{data[0].summaryProject}</Text>
            <Text style={styles.title}>Education</Text>
            <View style={styles.education}>
              <Text style={styles.container}>
                {data[0].nameEducation}
                {data[0].typeEducation}
                {data[0].countryEducation}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
const Down = () => {
  const skills = useSelector(getSkills);
  const data = useSelector(getData);

  return (
    <PDFDownloadLink
      document={<MyDocument skills={skills} data={data} />}
      fileName="somename.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};
export default Down;
