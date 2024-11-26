<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="iso-8859-15" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="results/title"/></title>
        <link rel="stylesheet" type="text/css" media="screen, print" href="../tournament.css"/>
      </head>
      <body>
        <div id="title">
          <h1><xsl:value-of select="results/title"/></h1>
        </div>
        
        <div id="main">
          <xsl:apply-templates select="results/scoreboard"/>
          <xsl:apply-templates select="results/matches"/>
        </div>
        
        <div id="footer">
          <a href="http://kickofftug.tugraz.at">KickOffTUG</a> | <a href="http://www.tugraz.at">Graz University of Technology</a>, 2010
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="results">
    <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="scoreboard">
    <xsl:if test="@show = 'yes'">
      <h2>Score Board</h2>
      <table>
        <tr>
          <th rowspan="2">Place</th>
          <th rowspan="2" colspan="2">Team</th>
          <th rowspan="2">Points</th>
          <th rowspan="2">Total Score</th>
          <th rowspan="2">Games</th>
          <th colspan="3">Results</th>
          <th colspan="3">Average Goals</th>
        </tr>
        <tr>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Difference</th>
          <th>Scored</th>
        </tr>
        <xsl:apply-templates/>
      </table>
    </xsl:if>
  </xsl:template>
  
  <xsl:template match="score">
    <tr>
      <td class="index"><xsl:value-of select="position() - 1"/></td>
      <td class="country"><xsl:apply-templates select="team/country"/></td>
      <td class="team"><xsl:apply-templates select="team/teamname"/></td>
      <td class="points"><xsl:value-of select="points"/></td>
      <td class="score"><xsl:value-of select="goals_scored"/> : <xsl:value-of select="goals_received"/></td>
      <td class="matches"><xsl:value-of select="matches"/></td>
      <td class="results"><xsl:value-of select="won"/></td>
      <td class="results"><xsl:value-of select="drawn"/></td>
      <td class="results"><xsl:value-of select="lost"/></td>
      <td class="avg"><xsl:value-of select="format-number(avg_goal_diff,'##0.00')"/></td>
      <td class="avg"><xsl:value-of select="format-number(avg_goals_scored,'##0.00')"/></td>
    </tr>
  </xsl:template>
  
  <xsl:template match="matches">
    <h2>Matches</h2>
    <table>
      <tr>
        <th>Index</th>
        <th>
          <xsl:attribute name="colspan">  
            <xsl:choose>
              <xsl:when test="/results/scoreboard[@show = 'no']">3</xsl:when>
              <xsl:otherwise>2</xsl:otherwise>
            </xsl:choose>
          </xsl:attribute>
          Team Left
        </th>
        <th>Score</th>
        <xsl:if test="/results/penalty = 'yes'">
          <th>Penalty</th>
        </xsl:if>
        <th>
          <xsl:attribute name="colspan">  
            <xsl:choose>
              <xsl:when test="/results/scoreboard[@show = 'no']">3</xsl:when>
              <xsl:otherwise>2</xsl:otherwise>
            </xsl:choose>
          </xsl:attribute>
          Team Right
        </th>
        <th>Time</th>
        <xsl:if test="/results/robocup2flash = 'yes'">
          <th>View</th>
        </xsl:if>
        <xsl:if test="/results/statistics = 'yes'">
          <th>Statistics</th>
        </xsl:if>
        <th>Server Log Files</th>
      </tr>
      <xsl:apply-templates/>
    </table>
  </xsl:template>

  <xsl:template match="match">
    <tr>
      <td class="index"><xsl:value-of select="position() - 1"/></td>
      <xsl:if test="/results/scoreboard[@show = 'no']">
        <td class="country"><xsl:apply-templates select="team_l/team/country"/></td>
      </xsl:if>
      <td>
        <xsl:choose>
          <xsl:when test="team_l/score + team_l/penalty_score &gt; team_r/score + team_r/penalty_score"><xsl:attribute name="class">team + winner</xsl:attribute></xsl:when>
          <xsl:otherwise><xsl:attribute name="class">class + looser</xsl:attribute></xsl:otherwise>
        </xsl:choose>
        <xsl:apply-templates select="team_l/team"/>
      </td>
      <td class="log">
        <a><xsl:attribute name="href"><xsl:value-of select="team_l/output"/></xsl:attribute>std</a>,
        <a><xsl:attribute name="href"><xsl:value-of select="team_l/error"/></xsl:attribute>err</a>
        <xsl:if test="team_l/exception = 'yes'"><span class="exception"> (!)</span></xsl:if>
      </td>
      <td class="score">
        <xsl:value-of select="team_l/score"/> : <xsl:value-of select="team_r/score"/>
      </td>
      <xsl:if test="/results/penalty = 'yes'">
        <td class="score">
          <xsl:choose>
            <xsl:when test="penalty = 'yes'">
              <xsl:value-of select="team_l/penalty_score"/> : <xsl:value-of select="team_r/penalty_score"/>
            </xsl:when>
            <xsl:otherwise>-</xsl:otherwise>
          </xsl:choose>
        </td>
      </xsl:if>
      <xsl:if test="/results/scoreboard[@show = 'no']">
        <td class="country"><xsl:apply-templates select="team_r/team/country"/></td>
      </xsl:if>
      <td>
        <xsl:choose>
          <xsl:when test="team_l/score + team_l/penalty_score &lt; team_r/score + team_r/penalty_score"><xsl:attribute name="class">team + winner</xsl:attribute></xsl:when>
          <xsl:otherwise><xsl:attribute name="class">class + looser</xsl:attribute></xsl:otherwise>
        </xsl:choose>
        <xsl:apply-templates select="team_r/team"/>
      </td>
      <td class="log">
        <a><xsl:attribute name="href"><xsl:value-of select="team_r/output"/></xsl:attribute>std</a>,
        <a><xsl:attribute name="href"><xsl:value-of select="team_r/error"/></xsl:attribute>err</a>
        <xsl:if test="team_r/exception = 'yes'"><span class="exception"> (!)</span></xsl:if>
      </td>
      <td class="time"><xsl:value-of select="time"/></td>
      <xsl:if test="/results/robocup2flash = 'yes'">
        <td class="log">
          <a><xsl:attribute name="href"><xsl:value-of select="server/swf"/></xsl:attribute>View</a>
        </td>
      </xsl:if>
      <xsl:if test="/results/statistics = 'yes'">
        <td class="log"><xsl:apply-templates select="server/statistics"/></td>
      </xsl:if>
      <td class="log">
        <a><xsl:attribute name="href"><xsl:value-of select="server/rcg"/></xsl:attribute>rcg</a>,
        <a><xsl:attribute name="href"><xsl:value-of select="server/rcl"/></xsl:attribute>rcl</a>,
        <a><xsl:attribute name="href"><xsl:value-of select="server/output"/></xsl:attribute>std</a>,
        <a><xsl:attribute name="href"><xsl:value-of select="server/error"/></xsl:attribute>err</a>
      </td>
    </tr>
  </xsl:template>
    
  <xsl:template match="teamname">
    <xsl:choose>
      <xsl:when test=". = ''">
        <xsl:value-of select="../dir"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="."/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="country">
    <img><xsl:attribute name="src">../countries/<xsl:value-of select="."/>.png</xsl:attribute></img>
  </xsl:template>

  <xsl:template match="team">
    <xsl:apply-templates select="teamname"/>
  </xsl:template>
  
  <xsl:template match="statistics">
    <xsl:choose>
      <xsl:when test=". = 'no'">-</xsl:when>
      <xsl:otherwise><a><xsl:attribute name="href"><xsl:value-of select="."/></xsl:attribute>Statistics</a></xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>
