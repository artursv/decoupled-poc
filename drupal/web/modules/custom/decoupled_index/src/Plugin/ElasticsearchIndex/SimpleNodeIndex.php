<?php

namespace Drupal\decoupled_index\Plugin\ElasticsearchIndex;

use Drupal\elasticsearch_helper\Plugin\ElasticsearchIndexBase;

/**
 * @ElasticsearchIndex(
 *   id = "simple_node_index",
 *   label = @Translation("Simple Node Index"),
 *   indexName = "simple",
 *   typeName = "node",
 *   entityType = "node"
 * )
 */
class SimpleNodeIndex extends ElasticsearchIndexBase {

  /**
   * NOTE: The structure of the indexed data is determined by normalizers,
   * see NodeNormalizer.php.
   */
}
